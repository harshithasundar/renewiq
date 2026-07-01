import AddSubscriptionDialog from "@/components/subscription/AddSubscriptionDialog";

export default function Hero() {
  return (
    <section className="flex items-center justify-between rounded-[28px] bg-white p-10 py-8 shadow-card">
      <div>
        <p className="text-sm text-muted">
          Good Morning 👋
        </p>

        <h1 className="mt-1 text-3xl font-bold text-text">
          Harshitha
        </h1>

        <p className="mt-3 max-w-lg text-muted">
          Everything looks under control today.
          Let's make sure nothing renews unexpectedly.
        </p>
      </div>

      <AddSubscriptionDialog />
    </section>
  );
}