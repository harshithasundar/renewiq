import prisma from "../config/prisma";

export const createCategory = async (
  userId: string,
  name: string,
  icon?: string,
  color?: string
) => {
  const category = await prisma.category.create({
    data: {
      name,
      icon,
      color,
      userId,
    },
  });

  return category;
};