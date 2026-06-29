import prisma from "../config/prisma";

export const getDashboard = async (userId: string) => {
  const subscriptions = await prisma.subscription.findMany({
    where: {
      userId,
      status: "ACTIVE",
    },
    include: {
      category: true,
    },
  });

  const totalSubscriptions = subscriptions.length;

  const monthlySpend = subscriptions.reduce((total, subscription) => {
    switch (subscription.billingCycle) {
      case "MONTHLY":
        return total + subscription.price;

      case "YEARLY":
        return total + subscription.price / 12;

      case "QUARTERLY":
        return total + subscription.price / 3;

      case "WEEKLY":
        return total + subscription.price * 4.345;

      default:
        return total;
    }
  }, 0);

  const now = new Date();

  const nextSevenDays = new Date();

  nextSevenDays.setDate(now.getDate() + 7);

  const upcomingRenewals = subscriptions.filter(
    (subscription) =>
      subscription.renewalDate >= now &&
      subscription.renewalDate <= nextSevenDays
  );

  const categoryMap = new Map<
    string,
    {
      name: string;
      amount: number;
    }
  >();

  subscriptions.forEach((subscription) => {
    const key = subscription.category.id;

    if (!categoryMap.has(key)) {
      categoryMap.set(key, {
        name: subscription.category.name,
        amount: 0,
      });
    }

    const category = categoryMap.get(key)!;

    category.amount += subscription.price;
  });

  const categoryBreakdown = Array.from(categoryMap.values());

  return {
    monthlySpend: Number(monthlySpend.toFixed(2)),
    totalSubscriptions,
    activeSubscriptions: totalSubscriptions,
    upcomingRenewals: upcomingRenewals.length,
    categoryBreakdown,
    recentSubscriptions: subscriptions
      .sort(
        (a, b) =>
          b.createdAt.getTime() -
          a.createdAt.getTime()
      )
      .slice(0, 5),
  };
};