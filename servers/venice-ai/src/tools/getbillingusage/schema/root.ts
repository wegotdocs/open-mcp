import { z } from "zod"

export const inputParamsSchema = {
  "currency": z.enum(["USD","VCU"]).describe("Filter by currency").optional(),
  "endDate": z.string().datetime({ offset: true }).describe("End date for filtering records (ISO 8601)").optional(),
  "limit": z.number().int().gt(0).lte(500).describe("Number of items per page").optional(),
  "page": z.number().int().gt(0).describe("Page number for pagination").optional(),
  "sortOrder": z.enum(["asc","desc"]).describe("Sort order for createdAt field").optional(),
  "startDate": z.string().datetime({ offset: true }).describe("Start date for filtering records (ISO 8601)").optional(),
  "Accept": z.string().describe("Accept header to specify the response format").optional()
}