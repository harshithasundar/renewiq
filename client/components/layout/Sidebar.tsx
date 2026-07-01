"use client";

import Logo from "@/components/common/Logo";
import {
  Home,
  CreditCard,
  Calendar,
  BarChart3,
  Sparkles,
  Settings,
} from "lucide-react";

const items = [
  {
    icon: Home,
    label: "Home",
    active: true,
  },
  {
    icon: CreditCard,
    label: "Subscriptions",
    active: false,
  },
  {
    icon: Calendar,
    label: "Renewals",
    active: false,
  },
  {
    icon: BarChart3,
    label: "Analytics",
    active: false,
  },
  {
    icon: Sparkles,
    label: "Insights",
    active: false,
  },
  {
    icon: Settings,
    label: "Settings",
    active: false,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="px-6 py-8">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <div className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                  item.active
                    ? "bg-white shadow-sm"
                    : "hover:bg-white/70"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    item.active
                      ? "text-primary"
                      : "text-muted"
                  }`}
                />

                <span
                  className={`font-medium ${
                    item.active
                      ? "text-text"
                      : "text-muted"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}