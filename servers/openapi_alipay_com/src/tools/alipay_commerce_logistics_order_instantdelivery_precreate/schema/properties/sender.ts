import { z } from "zod"

export const inputParams = {
  "address": z.string().describe("地址(街道、小区、大厦等，用于定位)").optional(),
  "address_detail": z.string().describe("地址详情(楼号、单元号、层号)").optional(),
  "city": z.string().describe("城市名称，如杭州市").optional(),
  "coordinate_type": z.number().int().describe("坐标类型，0：火星坐标（高德，腾讯地图均采用火星坐标） 1:百度坐标， 目前只支持0").optional(),
  "lat": z.string().describe("纬度").optional(),
  "lng": z.string().describe("经度").optional(),
  "mobile_no": z.string().describe("手机号").optional(),
  "name": z.string().describe("姓名").optional()
}