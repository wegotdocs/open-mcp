import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User's email address. The special value \"me\" can be used to indicate the authenticated user."),
  "forwardingEmail": z.string().describe("An email address to which messages can be forwarded.").optional(),
  "verificationStatus": z.enum(["verificationStatusUnspecified","accepted","pending"]).describe("Indicates whether this address has been verified and is usable for forwarding. Read-only.").optional()
}