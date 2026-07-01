"use client";

import { useEffect, useState } from "react";
import { getCategories } from "@/services/category.service";

export interface Category {
  id: string;
  name: string;
  icon?: string;
  color?: string;
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return {
    categories,
    loading,
  };
}