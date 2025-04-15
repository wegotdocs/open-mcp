import { z } from "zod"

export const inputParams = {
  "pid": z.string().describe("商户pid").optional(),
  "service_id": z.string().describe("信用服务id").optional(),
  "smid": z.string().describe("二级商户进件id").optional(),
  "sub_merchant_contact_number": z.string().describe("子商户联系电话").optional(),
  "sub_merchant_jump_link": z.string().describe("子商户跳转链接").optional(),
  "sub_merchant_logo_url": z.string().describe("子商户logo地址").optional(),
  "sub_merchant_name": z.string().describe("子商户名").optional(),
  "sub_pid": z.string().describe("子商户id").optional()
}