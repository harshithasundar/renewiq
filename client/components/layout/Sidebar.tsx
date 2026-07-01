"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  CreditCard,
  CalendarDays,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Subscriptions",
    href: "/subscriptions",
    icon: CreditCard,
  },
  {
    name: "Renewals",
    href: "/renewals",
    icon: CalendarDays,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-[#F6F8F3] p-6">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          🔄
        </div>

        <div>
          <h1 className="text-xl font-bold text-text">
            RenewIQ
          </h1>

          <p className="text-xs text-muted">
            Renew smarter. Spend wiser.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-white text-primary shadow-sm"
                  : "text-muted hover:bg-white hover:text-text"
              }`}
            >
              <Icon className="h-5 w-5" />

              <span className="font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}