import { Request, Response } from "express";
import { categorySchema } from "../validators/category.validator";
import { createCategory } from "../services/category.service";

export const create = async (req: Request, res: Response) => {
  try {
    const validatedData = categorySchema.parse(req.body);

    const category = await createCategory(
      req.userId!,
      validatedData.name,
      validatedData.icon,
      validatedData.color
    );

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Something went wrong",
    });
  }
};