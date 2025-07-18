import { z } from "zod"

export const inputParamsSchema = {
  "connectionId": z.string().describe("Connection id for streaming conversation.").optional()
}