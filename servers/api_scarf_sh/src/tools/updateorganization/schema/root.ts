import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "description": z.string().optional(),
  "website": z.string().optional(),
  "billing_email": z.string()
}