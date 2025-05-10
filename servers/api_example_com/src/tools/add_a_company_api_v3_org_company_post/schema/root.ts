import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "time_offset": z.number().describe("Ex: China Standard Time: +8, Eastern Standard Time: -5")
}