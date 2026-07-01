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
export const getCategories = async (userId: string) => {
  return await prisma.category.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
