import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("ID of the business"),
  "message_id": z.string().describe("ID of the message to delete")
}