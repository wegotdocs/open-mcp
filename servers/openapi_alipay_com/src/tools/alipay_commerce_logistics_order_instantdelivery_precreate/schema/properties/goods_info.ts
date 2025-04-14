import { z } from "zod"

export const inputParams = {
  "delivery_info": z.string().describe("交货信息，用于骑手交付商品").optional(),
  "first_class": z.string().describe("一级品类类目").optional(),
  "height": z.number().int().describe("商品高度，单位为cm").optional(),
  "length": z.number().int().describe("商品长度，单位为cm").optional(),
  "pickup_info": z.string().describe("取货信息，用于骑手到店取货").optional(),
  "price": z.string().describe("总价").optional(),
  "second_class": z.string().describe("二级品类类目").optional(),
  "weight": z.string().describe("货物重量，单位为kg，精确到小数点后两位").optional(),
  "width": z.number().int().describe("商品宽度，单位为cm").optional()
}