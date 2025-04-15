import { z } from "zod"

export const inputParams = {
  "address": z.string().describe("拓展助手商机地址").optional(),
  "city_code": z.string().describe("拓展助手商机地址市code").optional(),
  "city_name": z.string().describe("拓展助手商机地址市名称").optional(),
  "district_code": z.string().describe("拓展助手商机地址区code").optional(),
  "district_name": z.string().describe("拓展助手商机地址区名称").optional(),
  "email": z.string().describe("拓展助手商机邮箱").optional(),
  "latitude": z.string().describe("拓展助手商机地址纬度").optional(),
  "longitude": z.string().describe("拓展助手商机地址经度").optional(),
  "mcc": z.string().describe("mcc行业").optional(),
  "merchant_pid": z.string().describe("2088账号").optional(),
  "name": z.string().describe("拓展助手商机名称").optional(),
  "out_biz_no": z.string().describe("外部幂等唯一键").optional(),
  "phone": z.string().describe("拓展助手商机联系电话").optional(),
  "province_code": z.string().describe("拓展助手商机地址省code").optional(),
  "province_name": z.string().describe("拓展助手商机地址省名称").optional(),
  "scene": z.string().describe("拓展助手场景，参数约定").optional()
}