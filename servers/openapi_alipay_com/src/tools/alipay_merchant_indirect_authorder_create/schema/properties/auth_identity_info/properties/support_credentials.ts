import { z } from "zod"

export const inputParams = {
  "city_code": z.string().describe("门店市行政区号（数字）").optional(),
  "district_code": z.string().describe("门店街道区号（数字）").optional(),
  "merchant_type": z.string().describe("小微商户经营类型，枚举值：门店场所（STORE）、流动经营（STALL）").optional(),
  "province_code": z.string().describe("门店省行政区号（数字").optional(),
  "store_address": z.string().describe("门店场所填写门店详细地址，流动经营类型填“无”").optional(),
  "store_door_img": z.string().describe("门店门头照信息或摊位照（使用图片上传接口）").optional(),
  "store_inner_img": z.string().describe("门店店内照片或者摊位照侧面（使用图片上传接口）").optional(),
  "store_name": z.string().describe("门店名称").optional()
}