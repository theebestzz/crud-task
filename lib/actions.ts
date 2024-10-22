"use server";

import { prisma } from "@/lib/db";
import { PrismaModels } from "@/lib/types";
import { revalidateTag, unstable_noStore } from "next/cache";

// Create function
export async function create<T>(table: PrismaModels, data: T) {
  await (prisma as any)[table].create({
    data,
  });

  revalidateTag(table);
}

// Read (get all items) function
export async function getAll<T>(table: PrismaModels): Promise<T[]> {
  unstable_noStore();

  const items = await (prisma as any)[table].findMany();
  return items as T[];
}

// Update function
export async function update<T>(
  table: PrismaModels,
  id: string,
  data: Partial<T>,
) {
  await (prisma as any)[table].update({
    where: { id },
    data,
  });

  revalidateTag(table);
}

// Delete function
export async function remove(table: PrismaModels, id: string) {
  await (prisma as any)[table].delete({
    where: { id },
  });

  revalidateTag(table);
}
