import { z } from "zod"

export const inputParamsSchema = {
  "useCaseId": z.string().uuid().describe("Use case identifier.").optional(),
  "connectionId": z.string().describe("Connection id for streaming conversation.").optional()
}