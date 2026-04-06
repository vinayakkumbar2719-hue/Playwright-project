import { z } from "zod";

export const loginSchema = z.object({
  responseCode: z.number(),
  message: z.string(),
});

export const createUserSchema = z.object({
  responseCode: z.number(),
  message: z.string(),
});