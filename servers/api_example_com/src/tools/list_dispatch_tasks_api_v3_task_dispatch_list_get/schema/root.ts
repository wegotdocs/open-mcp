import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.number().int(),
  "start_date": z.string().date(),
  "end_date": z.string().date(),
  "time_offset": z.number().describe("Browser time offset relative to UTC time. ex: China Standard Time: 8, Eastern Standard Time: -5"),
  "session_id": z.string().optional()
}