import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "messageId": z.string().describe("The ID of the message containing the attachment."),
  "id": z.string().describe("The ID of the attachment.")
}