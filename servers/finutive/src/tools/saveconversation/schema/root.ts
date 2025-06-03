import { z } from "zod"

export const inputParamsSchema = {
  "conversation_id": z.string().describe("ID of the conversation to save")
}