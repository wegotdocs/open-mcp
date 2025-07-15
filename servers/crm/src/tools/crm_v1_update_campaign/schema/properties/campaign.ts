import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().optional(),
  "name": z.string().optional()
}