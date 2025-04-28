import { z } from "zod"

export const inputParamsSchema = {
  "skd_id": z.number().int(),
  "show_layout": z.number().int().describe("Show layouts? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional()
}