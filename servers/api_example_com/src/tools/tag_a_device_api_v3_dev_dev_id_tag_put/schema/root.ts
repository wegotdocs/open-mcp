import { z } from "zod"

export const inputParamsSchema = {
  "dev_id": z.number().int(),
  "flush": z.union([z.number().int(), z.null()]).describe("Flush out old tags? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}