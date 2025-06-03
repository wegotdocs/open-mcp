import { z } from "zod"

export const inputParamsSchema = {
  "conversationId": z.string().describe("ID of the conversation to add users to"),
  "users": z.array(z.string().describe("List of user IDs to add to the conversation")).describe("List of user IDs to add to the conversation")
}