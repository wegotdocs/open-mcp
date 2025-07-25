import { z } from "zod"

export const inputParamsSchema = {
  "organization_id": z.string().optional(),
  "per_page": z.number().int().optional()
}