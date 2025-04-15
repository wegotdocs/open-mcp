import { z } from "zod"

export const inputParams = {
  "brand_id": z.string().describe("品牌id").optional(),
  "brand_name": z.string().describe("品牌名称").optional(),
  "channel": z.string().describe("请求渠道").optional(),
  "order_feature": z.string().describe("单据属性,风控系统使用").optional()
}