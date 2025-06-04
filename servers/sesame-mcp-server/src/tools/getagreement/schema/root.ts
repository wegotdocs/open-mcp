import { z } from "zod"

export const inputParamsSchema = {
  "agreementId": z.string().uuid().describe("Agreement UUID"),
  "limit": z.number().int().describe("Limit results").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}