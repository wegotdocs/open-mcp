import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for the document. Either the UUID or the urlId is acceptable."),
  "query": z.string().describe("If set, will filter the results by user name").optional()
}