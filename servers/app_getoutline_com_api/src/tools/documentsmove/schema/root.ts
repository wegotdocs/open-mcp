import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for the document. Either the UUID or the urlId is acceptable."),
  "collectionId": z.string().uuid().optional(),
  "parentDocumentId": z.string().uuid().optional()
}