import { z } from "zod"

export const inputParamsSchema = {
  "status": z.enum(["PENDING","PROCESSED"]).optional(),
  "fromDate": z.string().datetime({ offset: true }).optional(),
  "toDate": z.string().datetime({ offset: true }).optional(),
  "page": z.number().int().describe("Zero-based page index (0..N)").optional(),
  "size": z.number().int().describe("The size of the page to be returned").optional(),
  "sort": z.array(z.string()).describe("Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.").optional()
}