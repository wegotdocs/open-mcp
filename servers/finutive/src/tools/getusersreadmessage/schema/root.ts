import { z } from "zod"

export const inputParamsSchema = {
  "message_id": z.string().describe("ID of the message")
}