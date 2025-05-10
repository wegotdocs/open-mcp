import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional(),
  "pageSize": z.number().int().optional(),
  "sortKey": z.string().optional(),
  "sortDirection": z.enum(["default","ascending","descending"]).optional(),
  "level": z.string().optional()
}