import { z } from "zod"

export const inputParamsSchema = {
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "email": z.union([z.string(), z.null()]).optional(),
  "prefer_lang": z.union([z.string(), z.null()]).optional()
}