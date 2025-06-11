import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "documentId": z.string().uuid().describe("Identifier for the associated document, if any.").optional(),
  "contentType": z.string(),
  "size": z.number().describe("Size of the file attachment in bytes.")
}