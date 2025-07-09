import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(1).describe("Pagination attribute to limit how many records will be returned per page").optional(),
  "offset": z.number().int().gte(0).describe("Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.").optional()
}