import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User's email address. The special value \"me\" can be used to indicate the authenticated user."),
  "disposition": z.enum(["dispositionUnspecified","leaveInInbox","archive","trash","markRead"]).describe("The state that a message should be left in after it has been forwarded.").optional(),
  "emailAddress": z.string().describe("Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses.").optional(),
  "enabled": z.boolean().describe("Whether all incoming mail is automatically forwarded to another address.").optional()
}