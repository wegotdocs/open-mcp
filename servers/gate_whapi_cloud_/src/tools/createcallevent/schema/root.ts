import { z } from "zod"

export const inputParamsSchema = {
  "start_time": z.string().describe("Start time of the call in UNIX timestamp format (in seconds)")
}