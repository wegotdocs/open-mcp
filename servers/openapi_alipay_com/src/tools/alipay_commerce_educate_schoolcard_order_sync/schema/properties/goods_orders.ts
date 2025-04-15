import { z } from "zod"

export const inputParams = {
  "goods_name": z.string().describe("商品名称").optional(),
  "goods_picture_id": z.string().describe("商品图片素材Id").optional()
}