import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("ID of the business"),
  "title": z.string().describe("Title of the message"),
  "message": z.string().describe("Content of the message"),
  "responsible": z.string().describe("ID of the responsible person sending the message"),
  "destinataries": z.array(z.object({ "type": z.string().optional(), "id": z.string().optional() }).describe("List of recipients for the message")).describe("List of recipients for the message"),
  "element_type": z.string().describe("Type of element this message is related to").optional(),
  "element_id": z.string().describe("ID of the element this message is related to").optional(),
  "attachments": z.array(z.string().describe("List of attachment file IDs")).describe("List of attachment file IDs").optional(),
  "conversation_id": z.string().describe("ID of the conversation this message belongs to (if it's part of an existing conversation)").optional(),
  "is_public": z.boolean().describe("Whether the message is public or private").optional(),
  "is_closed": z.boolean().describe("Whether the conversation should be closed after sending the message").optional(),
  "users_cc": z.array(z.string().describe("List of user IDs to copy on the message")).describe("List of user IDs to copy on the message").optional()
}