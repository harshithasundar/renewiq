import { RefreshCw } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sidebar shadow-card">
        <RefreshCw
          className="h-5 w-5 text-primary"
          strokeWidth={2.2}
        />
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight text-text">
          RenewIQ
        </h1>

        <p className="text-xs text-muted">
          Renew smarter. Spend wiser.
        </p>
      </div>
    </div>
  );
}