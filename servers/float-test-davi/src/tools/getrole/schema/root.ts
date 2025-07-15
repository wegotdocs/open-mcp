import { z } from "zod"

export const inputParamsSchema = {
  "role_id": z.number().int().describe("The role's ID"),
  "expand": z.string().describe("Comma-delimited values expands the response with additional fields: `cost_rate_history`, `people_ids`,`people_count`").optional()
}