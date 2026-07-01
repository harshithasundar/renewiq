import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-[24px] bg-white p-6 shadow-card border border-border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-text">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-muted">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sidebar">
          {icon}
        </div>
      </div>
    </div>
  );
}