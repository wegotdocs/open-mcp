import { z } from "zod"

export const inputParamsSchema = {
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment"),
  "includeDeleted": z.boolean().describe("Include deleted Points in the response").optional()
}