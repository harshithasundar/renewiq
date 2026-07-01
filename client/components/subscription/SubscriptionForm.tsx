"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useCategories } from "@/hooks/useCategories";
import { createSubscription , updateSubscription,} from "@/services/subscription.service";
import { toast } from "sonner";


interface SubscriptionFormProps {
  onSuccess: () => void;
  subscription?: any;
}

export default function SubscriptionForm({
  onSuccess, subscription,
}: SubscriptionFormProps) {
  console.log("Subscription:", subscription);
  const { categories } = useCategories();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    currency: "INR",
    billingCycle: "MONTHLY",
    categoryId: "",
    renewalDate: "",
    startDate: "",
    paymentMethod: "",
    notes: "",
    autoRenew: true,
    logo: "",
  });
  useEffect(() => {
  if (!subscription || categories.length === 0) return;

  setFormData({
    name: subscription.name,
    price: String(subscription.price),
    currency: subscription.currency,
    billingCycle: subscription.billingCycle,
    categoryId:
  subscription.categoryId ??
  subscription.category?.id ??
  "",
    renewalDate: subscription.renewalDate.slice(0, 10),
    startDate: subscription.startDate.slice(0, 10),
    paymentMethod: subscription.paymentMethod || "",
    notes: subscription.notes || "",
    autoRenew: subscription.autoRenew,
    logo: subscription.logo || "",
  });
}, [subscription, categories]);

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    if (subscription) {
      console.log("FORM DATA", JSON.stringify(formData, null, 2));
console.log("SUBSCRIPTION", JSON.stringify(subscription, null, 2));
      await updateSubscription(subscription.id, {
        ...formData,
        price: Number(formData.price),
      });

      toast.success("Subscription updated successfully!");
    } else {
      await createSubscription({
        ...formData,
        price: Number(formData.price),
      });

      toast.success("Subscription added successfully!");
    }

    setFormData({
      name: "",
      price: "",
      currency: "INR",
      billingCycle: "MONTHLY",
      categoryId: "",
      renewalDate: "",
      startDate: "",
      paymentMethod: "",
      notes: "",
      autoRenew: true,
      logo: "",
    });

    onSuccess();

    // Temporary refresh
    window.location.reload();
  } catch (error) {
    console.error(error);

    toast.error(
      subscription
        ? "Failed to update subscription."
        : "Failed to add subscription."
    );
  }
};

  

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      {/* Service Name */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Service Name
        </label>

        <Input
          placeholder="Netflix"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />
      </div>

      {/* Price + Currency */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Price
          </label>

          <Input
            type="number"
            placeholder="649"
            value={formData.price}
            onChange={(e) =>
              setFormData({
                ...formData,
                price: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Currency
          </label>

          <Select
            value={formData.currency}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                currency: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="INR">INR</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Billing Cycle */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Billing Cycle
        </label>

        <Select
          value={formData.billingCycle}
          onValueChange={(value) =>
            setFormData({
              ...formData,
              billingCycle: value,
            })
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="MONTHLY">Monthly</SelectItem>
            <SelectItem value="YEARLY">Yearly</SelectItem>
            <SelectItem value="WEEKLY">Weekly</SelectItem>
            <SelectItem value="QUARTERLY">Quarterly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Category */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Category
        </label>

        <Select
          value={formData.categoryId}
          onValueChange={(value) =>
            setFormData({
              ...formData,
              categoryId: value,
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>

          <SelectContent>
            {categories.map((category) => (
              <SelectItem
                key={category.id}
                value={category.id}
              >
                {category.icon} {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Renewal Date */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Renewal Date
        </label>

        <Input
          type="date"
          value={formData.renewalDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              renewalDate: e.target.value,
            })
          }
        />
      </div>

      {/* Start Date */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Start Date
        </label>

        <Input
          type="date"
          value={formData.startDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              startDate: e.target.value,
            })
          }
        />
      </div>

      {/* Payment Method */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Payment Method
        </label>

        <Input
          placeholder="HDFC Credit Card"
          value={formData.paymentMethod}
          onChange={(e) =>
            setFormData({
              ...formData,
              paymentMethod: e.target.value,
            })
          }
        />
      </div>

      {/* Notes */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Notes
        </label>

        <Textarea
          placeholder="Family Plan"
          value={formData.notes}
          onChange={(e) =>
            setFormData({
              ...formData,
              notes: e.target.value,
            })
          }
        />
      </div>

      {/* Auto Renew */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={formData.autoRenew}
          onChange={(e) =>
            setFormData({
              ...formData,
              autoRenew: e.target.checked,
            })
          }
        />

        <span className="text-sm font-medium">
          Auto Renew
        </span>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline">
          Cancel
        </Button>

        <Button type="submit">
          Save Subscription
        </Button>
      </div>
    </form>
  );
}