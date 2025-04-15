import { z } from "zod"

export const inputParams = {
  "sub_merchant_id": z.string().describe("子商户的商户id").optional(),
  "sub_merchant_name": z.string().describe("子商户的商户名称").optional(),
  "sub_merchant_service_description": z.string().describe("子商户的服务描述").optional(),
  "sub_merchant_service_name": z.string().describe("子商户的服务名称").optional()
}