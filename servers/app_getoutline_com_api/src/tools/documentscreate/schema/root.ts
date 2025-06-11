import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string(),
  "text": z.string().describe("The body of the document in markdown").optional(),
  "collectionId": z.string().uuid(),
  "parentDocumentId": z.string().uuid().optional(),
  "templateId": z.string().uuid().optional(),
  "template": z.boolean().describe("Whether this document should be considered to be a template.").optional(),
  "publish": z.boolean().describe("Whether this document should be immediately published and made visible to other team members.").optional()
}