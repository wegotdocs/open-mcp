import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "createdBy": z.string().describe("The note's creator").readonly().optional(),
  "content": z.string().describe("The note's name"),
  "archived": z.boolean().describe("Is the note archived (excluded from List method)").optional(),
  "relatedType": z.enum(["customer","payment-card","payment-gateway","subscription","transaction"]).describe("The note's related resource type"),
  "relatedId": z.string(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "archivedTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}