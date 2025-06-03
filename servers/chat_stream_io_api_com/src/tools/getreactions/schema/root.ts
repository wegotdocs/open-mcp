import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Message ID"),
  "limit": z.number().int().describe("Number of records to return").optional(),
  "offset": z.number().int().describe("Number of records to offset").optional()
}