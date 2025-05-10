import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().date().optional(),
  "end_date": z.string().date().optional(),
  "time_offset": z.number().describe("Browser time offset relative to UTC time. ex: China Standard Time: 8, Eastern Standard Time: -5").optional(),
  "log_types": z.array(z.string()).describe("Log types").optional(),
  "t_types": z.array(z.string()).describe("Target types").optional(),
  "session_id": z.string().optional()
}