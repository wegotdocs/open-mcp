import { z } from "zod"

export const inputParamsSchema = {
  "fromDateCreated": z.string().datetime({ offset: true }).optional(),
  "toDateCreated": z.string().datetime({ offset: true }).optional(),
  "fromDateModified": z.string().datetime({ offset: true }).optional(),
  "toDateModified": z.string().datetime({ offset: true }).optional(),
  "fromDateStart": z.string().date().optional(),
  "toDateStart": z.string().date().optional(),
  "fromDateEnd": z.string().date().optional(),
  "toDateEnd": z.string().date().optional(),
  "page": z.number().int().describe("Zero-based page index (0..N)").optional(),
  "size": z.number().int().describe("The size of the page to be returned").optional(),
  "sort": z.array(z.string()).describe("Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.").optional()
}