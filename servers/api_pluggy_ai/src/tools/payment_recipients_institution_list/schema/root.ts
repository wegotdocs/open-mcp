import { z } from "zod"

export const inputParamsSchema = {
  "pageSize": z.number().describe("Page size for the paging request, default: 20").optional(),
  "page": z.number().describe("Page number for the paging request, default: 1").optional(),
  "name": z.string().describe("Filter institutions by name").optional()
}