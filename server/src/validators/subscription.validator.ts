import { z } from "zod";

export const subscriptionSchema = z.object({
  name: z.string().min(2, "Subscription name is required"),

  price: z.number().positive("Price must be greater than 0"),

  currency: z.string().min(1),

  billingCycle: z.enum([
    "MONTHLY",
    "YEARLY",
    "WEEKLY",
    "QUARTERLY",
  ]),

  renewalDate: z.string(),

  startDate: z.string(),

  paymentMethod: z.string().optional(),

  autoRenew: z.boolean(),

  notes: z.string().optional(),

  logo: z.string().optional(),

  categoryId: z.string(),
});