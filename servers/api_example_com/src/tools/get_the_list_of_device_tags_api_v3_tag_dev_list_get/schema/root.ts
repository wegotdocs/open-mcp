import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.number().int().describe("Only the super administrator can specify the org_id; otherwise, the org_id will default to the user's org_id."),
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}