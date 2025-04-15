import { z } from "zod"

export const inputParams = {
  "commodity_id": z.string().describe("服务市场商品Code").optional(),
  "page_size": z.string().describe("每页数量，范围(1-100)。默认：10").optional(),
  "page_num": z.string().describe("当前页码，从1开始。默认：1").optional()
}