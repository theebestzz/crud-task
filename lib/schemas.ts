import { z } from "zod";

export const FormSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters.",
    })
    .max(20, {
      message: "Title must be less than 20 characters.",
    }),
});