import { z } from "zod"

export const inputParamsSchema = {
  "conversation_ids": z.array(z.string().describe("List of conversation IDs to close")).describe("List of conversation IDs to close")
}