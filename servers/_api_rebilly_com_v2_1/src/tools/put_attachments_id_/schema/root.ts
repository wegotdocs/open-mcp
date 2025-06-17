import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "fileId": z.string().describe("Linked File object id"),
  "relatedType": z.enum(["customer","dispute","invoice","note","payment","plan","product","subscription","transaction"]).describe("Linked object type"),
  "relatedId": z.string().describe("Linked object Id"),
  "name": z.string().describe("The Original Attachment name").optional(),
  "description": z.string().describe("The Attachment description").optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.union([z.string(), z.string(), z.string()])).min(3).max(3).describe("The links related to resource").readonly().optional()
}