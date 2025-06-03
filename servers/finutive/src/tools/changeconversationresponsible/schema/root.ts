import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("ID of the business"),
  "conversation_id": z.string().describe("ID of the conversation"),
  "responsible_id": z.string().describe("ID of the new responsible person")
}