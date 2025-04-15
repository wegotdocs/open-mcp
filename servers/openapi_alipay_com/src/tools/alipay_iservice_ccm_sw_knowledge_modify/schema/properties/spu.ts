import { z } from "zod"

export const inputParams = {
  "brand": z.string().describe("商品品牌").optional(),
  "category": z.string().describe("商品类目").optional(),
  "dimension": z.string().describe("商品规格").optional(),
  "icon": z.string().describe("商品图片地址").optional(),
  "link_url": z.string().describe("商品链接").optional(),
  "spu_id": z.string().describe("商品ID").optional(),
  "title": z.string().describe("商品名称").optional()
}