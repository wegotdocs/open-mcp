import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "deleted": z.boolean().describe("Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.").optional(),
  "internalDateSource": z.enum(["receivedTime","dateHeader"]).describe("Source for Gmail's internal date of the message.").optional()
}