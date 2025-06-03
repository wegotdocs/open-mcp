import { z } from "zod"

export const inputParamsSchema = {
  "conversation_ids": z.array(z.string().describe("List of conversation IDs to reopen")).describe("List of conversation IDs to reopen")
}