import { z } from "zod"

export const inputParams = {
  "page_number": z.string().describe("每页记录条数，最小1，最大20").optional(),
  "page_size": z.string().describe("查询的页数，从1开始，最大1000").optional()
}