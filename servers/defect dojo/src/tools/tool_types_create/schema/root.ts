import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(200),
  "description": z.string().max(2000).nullable().optional()
}