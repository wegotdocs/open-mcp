import { z } from "zod"

export const inputParams = {
  "page_num": z.number().int().describe("分页查询页码").optional(),
  "page_size": z.number().int().describe("每页展示条数，最大支持50个").optional()
}