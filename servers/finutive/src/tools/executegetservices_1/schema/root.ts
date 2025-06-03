import { z } from "zod"

export const inputParamsSchema = {
  "onboarding": z.number().int().optional(),
  "manager": z.number().int().optional(),
  "only_recommended": z.number().int().optional(),
  "ratings": z.number().int().optional(),
  "business_id": z.string().optional()
}