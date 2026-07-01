"use client";

import { useEffect, useState } from "react";
import { getSubscriptions } from "@/services/subscription.service";

export interface Subscription {
  id: string;
  name: string;
  price: number;
  currency: string;
  renewalDate: string;
  billingCycle: string;
  category: {
    name: string;
    icon: string;
    color: string;
  };
}

export function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubscriptions() {
      try {
        const data = await getSubscriptions();
        setSubscriptions(data);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscriptions();
  }, []);

  return {
    subscriptions,
    loading,
  };
}