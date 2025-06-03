import { z } from "zod"

export const inputParamsSchema = {
  "hash": z.string().describe("Hash identifier of the document"),
  "inline": z.boolean().describe("Whether the document should be displayed inline in the browser or downloaded as an attachment").optional()
}