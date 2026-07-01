import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-border bg-white px-8">
      <div>
        <h1 className="text-2xl font-semibold text-text">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-full bg-background p-3 transition hover:bg-sidebar">
          <Bell className="h-5 w-5 text-primary" />
        </button>

        <Avatar className="h-10 w-10">
          <AvatarFallback className="bg-primary text-white">
            H
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}