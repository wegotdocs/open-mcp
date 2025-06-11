import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid(),
  "includeAnchorText": z.boolean().describe("Include the document text that the comment is anchored to, if any, in the response.").optional()
}