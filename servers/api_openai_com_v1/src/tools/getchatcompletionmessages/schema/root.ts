import { z } from "zod"

export const inputParamsSchema = {
  "completion_id": z.string().describe("The ID of the chat completion to retrieve messages from."),
  "after": z.string().describe("Identifier for the last message from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of messages to retrieve.").optional(),
  "order": z.enum(["asc","desc"]).describe("Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`.").optional()
}