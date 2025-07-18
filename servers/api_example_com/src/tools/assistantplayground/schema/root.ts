import { z } from "zod"

export const inputParamsSchema = {
  "prompt": z.string().nullable().describe("User question").optional(),
  "assistantId": z.string().uuid().describe("Assistant internal id").optional(),
  "threadId": z.string().nullable().describe("The thread id for the conversation").optional(),
  "connectionId": z.string().describe("ConnectionId for streaming").optional()
}