import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3).max(64),
  username: z.string().min(5).max(64),
  password: z.string().min(8).max(64),
});

export const loginSchema = registerSchema.omit({ name: true });
