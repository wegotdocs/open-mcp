import { z } from "zod"

export const inputParams = {
  "goods_count": z.number().int().describe("商品数量").optional(),
  "goods_img": z.string().describe("商品缩略图url，支持格式：bmp、jpg、jpeg、png、gif").optional(),
  "goods_name": z.string().describe("商品名称").optional(),
  "merchant_mobile": z.string().describe("商家电话").optional(),
  "merchant_name": z.string().describe("商家名称，tiny_app_id和merchant_name不能同时为空").optional(),
  "tiny_app_id": z.string().describe("商家小程序appid").optional(),
  "tiny_app_url": z.string().describe("商家小程序的路径，建议为订单页面").optional()
}