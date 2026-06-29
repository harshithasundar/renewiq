import { Request, Response } from "express";
import { subscriptionSchema } from "../validators/subscription.validator";
import {
  createSubscription,
  getSubscriptions,
} from "../services/subscription.service";
import {
  updateSubscription,
  deleteSubscription,
} from "../services/subscription.service";

export const create = async (req: Request, res: Response) => {
  try {
    const validatedData = subscriptionSchema.parse(req.body);

    const subscription = await createSubscription(
      req.userId!,
      validatedData
    );

    return res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      subscription,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const subscriptions = await getSubscriptions(req.userId!);

    return res.status(200).json({
      success: true,
      subscriptions,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const update = async (
  req: Request,
  res: Response
) => {
  try {
    const subscription = await updateSubscription(
      req.userId!,
      req.params.id as string,
      req.body
    );

    return res.json({
      success: true,
      message: "Subscription updated",
      subscription,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const remove = async (
  req: Request,
  res: Response
) => {
  try {
    await deleteSubscription(
      req.userId!,
      req.params.id as string
    );

    return res.json({
      success: true,
      message: "Subscription deleted",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};