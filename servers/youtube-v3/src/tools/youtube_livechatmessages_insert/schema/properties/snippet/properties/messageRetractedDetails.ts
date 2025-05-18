import { z } from "zod"

export const inputParamsSchema = {
  "retractedMessageId": z.string().optional()
}