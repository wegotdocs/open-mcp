import { z } from "zod"

export const inputParamsSchema = {
  "siteId": z.string().uuid().describe("Unique identifier of the Site"),
  "includeDeleted": z.boolean().describe("Include deleted Equipment in the response").optional(),
  "equipGroupId": z.string().uuid().describe("Unique identifier of a Group").optional()
}