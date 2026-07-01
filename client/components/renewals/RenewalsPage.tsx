"use client";

import { useSubscriptions } from "@/hooks/useSubscriptions";

export default function RenewalsPage() {
  const { subscriptions, loading } = useSubscriptions();

  if (loading) {
    return (
      <main className="p-8">
        <p>Loading renewals...</p>
      </main>
    );
  }

  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-text">
          Upcoming Renewals
        </h1>

        <p className="text-muted">
          Keep track of your upcoming subscription renewals.
        </p>
      </div>

      <div className="space-y-5">
        {subscriptions.map((subscription) => {
          const renewalDate = new Date(subscription.renewalDate);

          const today = new Date();

          const daysLeft = Math.ceil(
            (renewalDate.getTime() - today.getTime()) /
              (1000 * 60 * 60 * 24)
          );

          return (
            <div
              key={subscription.id}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    {subscription.name}
                  </h2>

                  <p className="mt-1 text-muted">
                    {subscription.category.icon}{" "}
                    {subscription.category.name}
                  </p>

                  <p className="mt-3 text-sm text-muted">
                    Renews on{" "}
                    {renewalDate.toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold">
                    ₹{subscription.price}
                  </p>

                  <p className="text-sm text-muted">
                    {subscription.billingCycle}
                  </p>

                  <p className="mt-3 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {daysLeft} days left
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}