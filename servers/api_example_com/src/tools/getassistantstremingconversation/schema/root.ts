import { z } from "zod"

export const inputParamsSchema = {
  "useCaseId": z.string().uuid().describe("Use case identifier."),
  "prompt": z.string().min(1).describe("User question"),
  "conversationId": z.number().int().nullable().describe("Unique identifier for the conversation.").optional(),
  "threadId": z.string().nullable().describe("Thread Id").optional(),
  "connectionId": z.string().describe("Connection id for streaming conversation.").optional()
}