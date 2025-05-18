import { z } from "zod"

export const inputParamsSchema = {
  "messageText": z.string().describe("The user's message.").optional()
}