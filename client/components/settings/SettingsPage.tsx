"use client";

import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-text">
          Settings
        </h1>

        <p className="text-muted">
          Manage your RenewIQ preferences.
        </p>
      </div>

      {/* Profile */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Profile
        </h2>

        <div className="mt-4 space-y-2">
          <p>
            <span className="font-medium">Name:</span> Harshitha
          </p>

          <p>
            <span className="font-medium">Email:</span> Demo User
          </p>
        </div>
      </div>

      {/* Currency */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Currency
        </h2>

        <p className="mt-2 text-muted">
          Current Currency: INR ₹
        </p>
      </div>

      {/* Logout */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Account
        </h2>

        <Button
          variant="destructive"
          className="mt-4"
        >
          Logout
        </Button>
      </div>
    </main>
  );
}