import { z } from "zod"

export const inputParamsSchema = {
  "excludeChats": z.boolean().describe("Whether the response should exclude chats.").optional(),
  "from": z.string().describe("The sender's display name or email address.").optional(),
  "hasAttachment": z.boolean().describe("Whether the message has any attachment.").optional(),
  "negatedQuery": z.string().describe("Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, `\"from:someuser@example.com rfc822msgid: is:unread\"`.").optional(),
  "query": z.string().describe("Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `\"from:someuser@example.com rfc822msgid: is:unread\"`.").optional(),
  "size": z.number().int().describe("The size of the entire RFC822 message in bytes, including all headers and attachments.").optional(),
  "sizeComparison": z.enum(["unspecified","smaller","larger"]).describe("How the message size in bytes should be in relation to the size field.").optional(),
  "subject": z.string().describe("Case-insensitive phrase found in the message's subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed.").optional(),
  "to": z.string().describe("The recipient's display name or email address. Includes recipients in the \"to\", \"cc\", and \"bcc\" header fields. You can use simply the local part of the email address. For example, \"example\" and \"example@\" both match \"example@gmail.com\". This field is case-insensitive.").optional()
}