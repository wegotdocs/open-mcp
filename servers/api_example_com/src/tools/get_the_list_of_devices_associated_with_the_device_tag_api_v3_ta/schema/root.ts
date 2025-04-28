import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.number().int(),
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}