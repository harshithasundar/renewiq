import prisma from "../config/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, 10);

  // Create user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
    },
  });

  // Create default categories
  await prisma.category.createMany({
    data: [
      {
        name: "Entertainment",
        icon: "🎬",
        color: "#EF4444",
        userId: user.id,
      },
      {
        name: "Music",
        icon: "🎵",
        color: "#8B5CF6",
        userId: user.id,
      },
      {
        name: "Productivity",
        icon: "💼",
        color: "#3B82F6",
        userId: user.id,
      },
      {
        name: "Gaming",
        icon: "🎮",
        color: "#22C55E",
        userId: user.id,
      },
      {
        name: "Wi-Fi",
        icon: "📶",
        color: "#0EA5E9",
        userId: user.id,
      },
      {
        name: "Mobile Recharge",
        icon: "📱",
        color: "#F97316",
        userId: user.id,
      },
      {
        name: "Cloud Storage",
        icon: "☁️",
        color: "#06B6D4",
        userId: user.id,
      },
      {
        name: "Fitness",
        icon: "💪",
        color: "#10B981",
        userId: user.id,
      },
      {
        name: "Education",
        icon: "📚",
        color: "#F59E0B",
        userId: user.id,
      },
      {
        name: "Security",
        icon: "🛡️",
        color: "#64748B",
        userId: user.id,
      },
    ],
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.passwordHash
  );

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user.id);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};