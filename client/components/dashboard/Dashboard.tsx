"use client";

import Hero from "./Hero";
import StatCard from "./StatCard";
import SubscriptionCard from "./SubscriptionCard";

import { useDashboard } from "@/hooks/useDashboard";

import {
  Wallet,
  CalendarClock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Dashboard() {
  const {
  data: dashboard,
  isLoading,
  error,
} = useDashboard();
  console.log("Dashboard State:", dashboard);

  if (isLoading) {
    return (
      <div className="space-y-8">
        <Hero />
        <p className="text-muted">Loading dashboard...</p>
      </div>
    );
  }

  if (error || !dashboard) {
    return (
      <div className="space-y-8">
        <Hero />
        <p className="text-red-500">Failed to load dashboard.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Hero />

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Monthly Spend"
          value={`₹${dashboard.monthlySpend}`}
          subtitle="Current month"
          icon={<Wallet className="h-6 w-6 text-primary" />}
        />

        <StatCard
          title="Upcoming Renewals"
          value={dashboard.upcomingRenewals.toString()}
          subtitle="Next 7 days"
          icon={<CalendarClock className="h-6 w-6 text-primary" />}
        />

        <StatCard
          title="Active Subscriptions"
          value={dashboard.activeSubscriptions.toString()}
          subtitle={`${dashboard.totalSubscriptions} Total`}
          icon={<ShieldCheck className="h-6 w-6 text-primary" />}
        />

        <StatCard
          title="Categories"
          value={dashboard.categoryBreakdown.length.toString()}
          subtitle="Subscription Categories"
          icon={<Sparkles className="h-6 w-6 text-primary" />}
        />
      </div>

      {/* Recent Subscriptions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-text">
          Recent Subscriptions
        </h2>

        <div className="space-y-4">
          {dashboard.recentSubscriptions.map((subscription: any) => (
            <SubscriptionCard
              key={subscription.id}
              name={subscription.name}
              category={subscription.category.name}
              price={subscription.price}
              renewalDate={subscription.renewalDate}
            />
          ))}
        </div>
      </section>
    </div>
  );
}