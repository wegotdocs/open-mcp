import { z } from "zod"

export const inputParamsSchema = {
  "equipGroupId": z.string().uuid().describe("Unique identifier of the Group"),
  "includeDeleted": z.boolean().describe("Include deleted Equipment in the response").optional()
}