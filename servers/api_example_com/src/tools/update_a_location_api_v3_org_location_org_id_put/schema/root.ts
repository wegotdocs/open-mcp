import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "time_offset": z.number().describe("Ex: China Standard Time: +8, Eastern Standard Time: -5"),
  "longitude": z.union([z.number(), z.null()]).optional(),
  "latitude": z.union([z.number(), z.null()]).optional(),
  "postal_address": z.union([z.string(), z.null()]).optional(),
  "weather_address": z.union([z.string(), z.null()]).optional()
}