"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const router = useRouter();

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : {};

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/login");
  };

  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-text">
          Settings
        </h1>

        <p className="text-muted">
          Manage your RenewIQ account.
        </p>
      </div>

      {/* Profile */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Profile
        </h2>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-sm text-muted">
              Name
            </p>

            <p className="text-lg font-medium">
              {user.name || "Unknown User"}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">
              Email
            </p>

            <p className="text-lg font-medium">
              {user.email || "No Email"}
            </p>
          </div>
        </div>
      </div>

      {/* Currency */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Currency
        </h2>

        <p className="mt-4 text-muted">
          Indian Rupee (₹)
        </p>
      </div>

      {/* Account */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Account
        </h2>

        <Button
          variant="destructive"
          className="mt-6"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>

      {/* App */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          About RenewIQ
        </h2>

        <p className="mt-4 text-muted">
          RenewIQ v1.0.0
        </p>

        <p className="mt-2 text-sm text-muted">
          Track and manage your recurring subscriptions in one place.
        </p>
      </div>
    </main>
  );
}