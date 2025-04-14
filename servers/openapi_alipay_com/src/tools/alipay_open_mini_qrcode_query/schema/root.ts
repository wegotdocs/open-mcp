import { z } from "zod"

export const inputParams = {
  "page_no": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("每页条数，最大为10").optional()
}