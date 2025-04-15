import { z } from "zod"

export const inputParams = {
  "page_num": z.number().int().describe("查询结果的页码，起始值为 1，默认值为 1").optional(),
  "page_size": z.number().int().describe("分页查询时设置的每页记录数，最大值 100 行，默认为 10").optional()
}