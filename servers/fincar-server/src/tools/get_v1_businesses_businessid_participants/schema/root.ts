import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.number().int().describe("ID of the business to retrieve participants for"),
  "limit": z.number().int().describe("Maximum number of results to return").optional(),
  "offset": z.number().int().describe("Number of results to skip").optional()
}