"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SubscriptionForm from "./SubscriptionForm";

interface AddSubscriptionDialogProps {
  subscription?: any;
  trigger?: React.ReactNode;
  onSuccess?: () => void;
}

export default function AddSubscriptionDialog({
  subscription, trigger, onSuccess,
}: AddSubscriptionDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
  {trigger ? (
    trigger
  ) : (
    <Button className="rounded-full bg-primary px-6 py-6 hover:bg-primary-hover">
      <Plus className="mr-2 h-5 w-5" />
      Add Subscription
    </Button>
  )}
</DialogTrigger>

      <DialogContent className="max-w-xl rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {subscription ? "Edit Subscription" : "Add Subscription"}
          </DialogTitle>
        </DialogHeader>

        <SubscriptionForm
  subscription={subscription}
  onSuccess={async () => {
  await onSuccess?.();
  setOpen(false);
}}
/>
      </DialogContent>
    </Dialog>
  );
}