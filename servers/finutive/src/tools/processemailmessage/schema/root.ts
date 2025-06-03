import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("ID of the business"),
  "email_id": z.string().describe("Unique identifier for the email"),
  "from_email": z.string().describe("Email address of the sender"),
  "subject": z.string().describe("Subject line of the email"),
  "body": z.string().describe("Main content of the email"),
  "attachments": z.array(z.object({ "id": z.string().describe("Unique identifier for the attachment"), "title": z.string().describe("Filename or title of the attachment"), "url": z.string().describe("URL to access the attachment file"), "type": z.string().describe("MIME type of the attachment"), "size": z.number().int().describe("Size of the attachment in bytes").optional() }).describe("Attachment in an email message")).describe("List of attachments included in the email").optional(),
  "conversation_id": z.string().describe("ID of the existing conversation if this email is part of one").optional(),
  "tag_service": z.string().describe("Service tag for routing and categorization").optional()
}