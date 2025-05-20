import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(100),
  "description": z.string().max(200).optional()
}