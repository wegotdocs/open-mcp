import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Unique identifier for the share.").optional(),
  "documentId": z.string().uuid().describe("Unique identifier for a document. One of id or documentId must be provided.").optional()
}