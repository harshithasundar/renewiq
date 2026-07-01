"use client";

import { useState } from "react";

import { useSubscriptions } from "@/hooks/useSubscriptions";
import { deleteSubscription } from "@/services/subscription.service";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import AddSubscriptionDialog from "@/components/subscription/AddSubscriptionDialog";

export default function SubscriptionsPage() {
  const {
  subscriptions,
  loading,
  refreshSubscriptions,
} = useSubscriptions();
  const [search, setSearch] = useState("");

  const filteredSubscriptions = subscriptions.filter((subscription) =>
    subscription.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this subscription?"
    );

    if (!confirmed) return;

    try {
      await deleteSubscription(id);

      toast.success("Subscription deleted successfully!");

      // Temporary refresh
      await refreshSubscriptions();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete subscription.");
    }
  };

  if (loading) {
    return (
      <main className="p-8">
        <p className="text-muted">
          Loading subscriptions...
        </p>
      </main>
    );
  }

  return (
    <main className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text">
            Subscriptions
          </h1>

          <p className="mt-1 text-muted">
            Manage all your subscriptions in one place.
          </p>
        </div>

        <AddSubscriptionDialog
  onSuccess={refreshSubscriptions}
/>
      </div>

      {/* Search */}
      <Input
        placeholder="Search subscriptions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md"
      />

      {/* Empty State */}
      {filteredSubscriptions.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-12 text-center">
          <h2 className="text-xl font-semibold">
            No subscriptions found
          </h2>

          <p className="mt-2 text-muted">
            Try another search or add your first subscription.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {filteredSubscriptions.map((subscription) => (
            <div
              key={subscription.id}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                {/* Left */}
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
                    {new Date(
                      subscription.renewalDate
                    ).toLocaleDateString()}
                  </p>
                </div>

                {/* Right */}
                <div className="text-right">
                  <p className="text-2xl font-bold">
                    ₹{subscription.price}
                  </p>

                  <p className="text-sm text-muted">
                    {subscription.billingCycle}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-end gap-3">
                <AddSubscriptionDialog
  subscription={subscription}
  trigger={<Button variant="outline">Edit</Button>}
onSuccess={refreshSubscriptions}
/>

                <Button
                  variant="destructive"
                  onClick={() => handleDelete(subscription.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}