import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "root_org_id": z.number().int(),
  "time_offset": z.number().describe("Ex: China Standard Time: +8, Eastern Standard Time: -5"),
  "longitude": z.union([z.number(), z.null()]).optional(),
  "latitude": z.union([z.number(), z.null()]).optional(),
  "postal_address": z.union([z.string(), z.null()]).optional(),
  "weather_address": z.union([z.string(), z.null()]).optional()
}