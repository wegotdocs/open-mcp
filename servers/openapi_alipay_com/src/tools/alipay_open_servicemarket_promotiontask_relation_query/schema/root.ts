import { z } from "zod"

export const inputParams = {
  "commodity_id": z.string().describe("服务商品ID，并不是uid，取值来源于前端的获取").optional(),
  "page_size": z.number().int().describe("每页数量，范围(1-100)。默认：10").optional(),
  "page_num": z.number().int().describe("当前页码，从1开始。默认：1").optional()
}