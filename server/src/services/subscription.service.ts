import prisma from "../config/prisma";

interface CreateSubscriptionData {
  name: string;
  price: number;
  currency: string;
  billingCycle: "MONTHLY" | "YEARLY" | "WEEKLY" | "QUARTERLY";
  renewalDate: string;
  startDate: string;
  paymentMethod?: string;
  autoRenew: boolean;
  notes?: string;
  logo?: string;
  categoryId: string;
}

export const createSubscription = async (
  userId: string,
  data: CreateSubscriptionData
) => {
  // Verify category belongs to logged-in user
  const category = await prisma.category.findFirst({
    where: {
      id: data.categoryId,
      userId,
    },
  });

  if (!category) {
    throw new Error("Category not found");
  }

  const subscription = await prisma.subscription.create({
    data: {
      name: data.name,
      price: data.price,
      currency: data.currency,
      billingCycle: data.billingCycle,
      renewalDate: new Date(data.renewalDate),
      startDate: new Date(data.startDate),
      paymentMethod: data.paymentMethod,
      autoRenew: data.autoRenew,
      notes: data.notes,
      logo: data.logo,
      userId,
      categoryId: data.categoryId,
    },
    include: {
      category: true,
    },
  });

  return subscription;
};

export const getSubscriptions = async (userId: string) => {
  return prisma.subscription.findMany({
    where: {
      userId,
    },
    include: {
      category: true,
    },
    orderBy: {
      renewalDate: "asc",
    },
  });
  
};
export const updateSubscription = async (
  userId: string,
  subscriptionId: string,
  data: Partial<CreateSubscriptionData>
) => {
  const existing = await prisma.subscription.findFirst({
    where: {
      id: subscriptionId,
      userId,
    },
  });

  if (!existing) {
    throw new Error("Subscription not found");
  }

  return prisma.subscription.update({
    where: {
      id: subscriptionId,
    },
    data: {
      ...data,
      renewalDate: data.renewalDate
        ? new Date(data.renewalDate)
        : undefined,

      startDate: data.startDate
        ? new Date(data.startDate)
        : undefined,
    },
    include: {
      category: true,
    },
  });
};

export const deleteSubscription = async (
  userId: string,
  subscriptionId: string
) => {
  const existing = await prisma.subscription.findFirst({
    where: {
      id: subscriptionId,
      userId,
    },
  });

  if (!existing) {
    throw new Error("Subscription not found");
  }

  await prisma.subscription.delete({
    where: {
      id: subscriptionId,
    },
  });

  return;
};