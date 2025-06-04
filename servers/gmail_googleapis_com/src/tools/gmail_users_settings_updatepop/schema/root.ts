import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User's email address. The special value \"me\" can be used to indicate the authenticated user."),
  "accessWindow": z.enum(["accessWindowUnspecified","disabled","fromNowOn","allMail"]).describe("The range of messages which are accessible via POP.").optional(),
  "disposition": z.enum(["dispositionUnspecified","leaveInInbox","archive","trash","markRead"]).describe("The action that will be executed on a message after it has been fetched via POP.").optional()
}