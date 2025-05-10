import { z } from "zod"

export const inputParamsSchema = {
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "includeDeleted": z.boolean().describe("Include deleted Sites in the response").optional()
}