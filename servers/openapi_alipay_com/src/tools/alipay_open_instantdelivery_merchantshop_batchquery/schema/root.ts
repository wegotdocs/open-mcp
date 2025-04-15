import { z } from "zod"

export const inputParams = {
  "page_no": z.number().int().describe("当前页码").optional(),
  "page_size": z.number().int().describe("分页数量, 最大50。").optional(),
  "shop_name": z.string().describe("门店名称").optional(),
  "shop_no": z.string().describe("商家门店编码。").optional()
}