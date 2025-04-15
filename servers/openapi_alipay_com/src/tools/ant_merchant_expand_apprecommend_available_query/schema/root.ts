import { z } from "zod"

export const inputParams = {
  "page_size": z.number().int().describe("单页行数，不能超过100行").optional(),
  "page_number": z.number().int().describe("页码").optional()
}