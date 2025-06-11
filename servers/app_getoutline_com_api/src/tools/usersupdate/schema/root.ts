import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "language": z.string().optional(),
  "avatarUrl": z.string().url().optional()
}