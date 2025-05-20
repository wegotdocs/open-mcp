import { z } from "zod"

export const inputParamsSchema = {
  "layout": z.any().optional(),
  "config": z.any().optional()
}