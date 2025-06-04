import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "addLabelIds": z.array(z.string()).describe("A list of label IDs to add to messages.").optional(),
  "ids": z.array(z.string()).describe("The IDs of the messages to modify. There is a limit of 1000 ids per request.").optional(),
  "removeLabelIds": z.array(z.string()).describe("A list of label IDs to remove from messages.").optional()
}