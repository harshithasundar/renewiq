"use client";

import { useSubscriptions } from "@/hooks/useSubscriptions";

export default function AnalyticsPage() {
  const { subscriptions, loading } = useSubscriptions();

  if (loading) {
    return (
      <main className="p-8">
        <p>Loading analytics...</p>
      </main>
    );
  }

  const totalMonthlySpend = subscriptions.reduce(
    (sum, sub) => sum + sub.price,
    0
  );

  const averageSpend =
    subscriptions.length > 0
      ? totalMonthlySpend / subscriptions.length
      : 0;

  const categories = new Set(
    subscriptions.map((sub) => sub.category.name)
  );

  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-text">
          Analytics
        </h1>

        <p className="text-muted">
          Overview of your subscription spending.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-muted">Monthly Spend</p>
          <h2 className="mt-2 text-3xl font-bold">
            ₹{totalMonthlySpend}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-muted">Subscriptions</p>
          <h2 className="mt-2 text-3xl font-bold">
            {subscriptions.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-muted">Average Cost</p>
          <h2 className="mt-2 text-3xl font-bold">
            ₹{averageSpend.toFixed(0)}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-muted">Categories</p>
          <h2 className="mt-2 text-3xl font-bold">
            {categories.size}
          </h2>
        </div>
      </div>
    </main>
  );
}