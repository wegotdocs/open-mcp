import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "user_id": z.string().describe("User ID"),
  "tools": z.array(z.object({ "id": z.string().optional(), "position": z.number().int().optional(), "enabled": z.boolean().optional() })).optional()
}