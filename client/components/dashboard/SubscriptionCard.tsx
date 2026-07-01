interface Props {
  name: string;
  category: string;
  price: number;
  renewalDate: string;
}

export default function SubscriptionCard({
  name,
  category,
  price,
  renewalDate,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-white p-5 shadow-card">
      <div>
        <h3 className="text-lg font-semibold text-text">
          {name}
        </h3>

        <p className="text-sm text-muted">
          {category}
        </p>
      </div>

      <div className="text-right">
        <p className="text-lg font-semibold text-text">
          ₹{price}
        </p>

        <p className="text-sm text-muted">
          {new Date(renewalDate).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
          })}
        </p>
      </div>
    </div>
  );
}