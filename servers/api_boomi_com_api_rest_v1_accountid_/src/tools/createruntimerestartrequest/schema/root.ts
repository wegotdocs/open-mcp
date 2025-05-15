import { z } from "zod"

export const inputParamsSchema = {
  "message": z.string().optional(),
  "runtimeId": z.string().describe("A unique ID for the runtime. Cloud attachments cannot be restarted.").optional()
}