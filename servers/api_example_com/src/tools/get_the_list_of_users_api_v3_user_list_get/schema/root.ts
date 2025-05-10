import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.union([z.number().int(), z.null()]).optional(),
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}