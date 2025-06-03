import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User's email address. The special value \"me\" can be used to indicate the authenticated user."),
  "delegateEmail": z.string().describe("The email address of the delegate.").optional(),
  "verificationStatus": z.enum(["verificationStatusUnspecified","accepted","pending","rejected","expired"]).describe("Indicates whether this address has been verified and can act as a delegate for the account. Read-only.").optional()
}