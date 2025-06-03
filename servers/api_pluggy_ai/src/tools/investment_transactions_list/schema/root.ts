import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Investment primary identifier"),
  "pageSize": z.number().describe("Page size for the paging request, default: 20").optional(),
  "page": z.number().describe("Page number for the paging request, default: 1").optional()
}