"use client";

import { createSubscription } from "@/services/subscription.service";

export function useCreateSubscription() {
  async function create(data: any) {
    return await createSubscription(data);
  }

  return { create };
}