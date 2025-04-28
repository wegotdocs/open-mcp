import { z } from "zod"

export const inputParamsSchema = {
  "root_org_id": z.union([z.number().int(), z.null()]).describe("Only the super administrator can specify the root_org_id; otherwise, the org_id will default to the user's org_id.").optional(),
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}