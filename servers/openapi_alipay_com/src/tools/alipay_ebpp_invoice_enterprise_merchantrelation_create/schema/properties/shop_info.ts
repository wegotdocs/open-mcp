import { z } from "zod"

export const inputParams = {
  "address": z.string().describe("门店地址").optional(),
  "city_id": z.string().describe("城市编码").optional(),
  "city_name": z.string().describe("城市名称").optional(),
  "district_id": z.string().describe("区编码").optional(),
  "district_name": z.string().describe("区名称").optional(),
  "latitude": z.string().describe("纬度").optional(),
  "longitude": z.string().describe("经度").optional(),
  "mcc_code_1": z.string().describe("一级mcc编码").optional(),
  "mcc_code_2": z.string().describe("二级mcc编码").optional(),
  "mcc_name_1": z.string().describe("一级mcc名称").optional(),
  "mcc_name_2": z.string().describe("二级mcc名称").optional(),
  "outdoor_img_url": z.string().describe("门头照地址").optional(),
  "poi_id": z.string().describe("高德poiId").optional(),
  "province_id": z.string().describe("省份编码").optional(),
  "province_name": z.string().describe("省份名称").optional(),
  "shop_name": z.string().describe("门店名称").optional()
}