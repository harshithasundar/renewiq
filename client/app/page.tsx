import DashboardLayout from "@/components/layout/DashboardLayout";
import Dashboard from "@/components/dashboard/Dashboard";
import AuthGuard from "@/components/auth/AuthGuard";

export default function Home() {
  return (
    <DashboardLayout>
  <Dashboard />
</DashboardLayout>
  );
}