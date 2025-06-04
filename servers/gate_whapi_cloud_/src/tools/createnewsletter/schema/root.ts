import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "description": z.string().optional(),
  "newsletter_pic": z.string().optional()
}