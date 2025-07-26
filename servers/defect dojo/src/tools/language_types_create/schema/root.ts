import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string().min(1).max(100),
  "color": z.string().max(7).nullable().optional()
}