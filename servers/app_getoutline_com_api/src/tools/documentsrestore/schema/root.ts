import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for the document. Either the UUID or the urlId is acceptable."),
  "revisionId": z.string().uuid().describe("Identifier for the revision to restore to.").optional()
}