import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for the document. Either the UUID or the urlId is acceptable.").optional(),
  "shareId": z.string().uuid().describe("Unique identifier for a document share, a shareId may be used in place of a document UUID").optional()
}