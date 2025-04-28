import { z } from "zod"

export const inputParamsSchema = {
  "os_type_id": z.union([z.array(z.number().int()), z.null()]).describe("Empty / 0: All, 1: Windows, 2: Android, 3: Web").optional(),
  "exclude_unknown_os": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "brief": z.union([z.number().int(), z.null()]).describe("Brief data only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}