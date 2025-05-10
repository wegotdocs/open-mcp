import { z } from "zod"

export const inputParams = {
  "area_code": z.string().describe("区域编码").optional(),
  "brand_code": z.string().describe("品牌编码").optional(),
  "device_mac": z.string().describe("机具Mac地址").optional(),
  "device_num": z.string().describe("机具编码").optional(),
  "geo": z.string().describe("经纬度").optional(),
  "group": z.string().describe("机具分组编码").optional(),
  "merchant_id": z.string().describe("商户ID").optional(),
  "partner_id": z.string().describe("ISV ID").optional(),
  "store_code": z.string().describe("门店编码").optional(),
  "wifimac": z.string().describe("WI-FI Mac地址").optional(),
  "wifiname": z.string().describe("WI-FI 名称").optional()
}