import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User's email address. The special value \"me\" can be used to indicate the authenticated user."),
  "enableAutoReply": z.boolean().describe("Flag that controls whether Gmail automatically replies to messages.").optional(),
  "endTime": z.string().describe("An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.").optional(),
  "responseBodyHtml": z.string().describe("Response body in HTML format. Gmail will sanitize the HTML before storing it. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.").optional(),
  "responseBodyPlainText": z.string().describe("Response body in plain text format. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.").optional(),
  "responseSubject": z.string().describe("Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty.").optional(),
  "restrictToContacts": z.boolean().describe("Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.").optional(),
  "restrictToDomain": z.boolean().describe("Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for Google Workspace users.").optional(),
  "startTime": z.string().describe("An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.").optional()
}