import { z } from "zod"

export const inputParams = {
  "app_no": z.string().describe("已关联小程序的app_id").optional(),
  "page_size": z.number().int().describe("单页行数，不能超过100行，单位：行").optional(),
  "page_number": z.number().int().describe("页码").optional()
}