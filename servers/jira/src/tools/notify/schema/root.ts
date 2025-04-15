import { z } from "zod"

export const inputParamsSchema = {
  "issueIdOrKey": z.string().describe("ID or key of the issue that the notification is sent for."),
  "htmlBody": z.string().describe("The HTML body of the email notification for the issue.").optional(),
  "restrict": z.string().optional(),
  "subject": z.string().describe("The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.").optional(),
  "textBody": z.string().describe("The plain text body of the email notification for the issue.").optional(),
  "to": z.string().optional()
}