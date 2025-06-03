import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().describe("Title of the message"),
  "message": z.string().describe("Content of the message"),
  "responsible": z.string().describe("ID of the responsible person sending the message"),
  "destinataries": z.array(z.object({ "business_id": z.string().describe("ID of the business to send the message to"), "service_id": z.string().describe("ID of the service associated with the business") }).describe("Business recipient for administrative messages")).describe("List of business recipients with their service IDs"),
  "attachments": z.array(z.string().describe("List of attachment file IDs")).describe("List of attachment file IDs").optional(),
  "is_closed": z.boolean().describe("Whether the conversation should be closed after sending the message").optional()
}