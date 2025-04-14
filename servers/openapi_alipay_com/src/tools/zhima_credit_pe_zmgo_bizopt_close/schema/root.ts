import { z } from "zod"

export const inputParams = {
  "alipay_user_id": z.string().describe("支付宝用户Id").optional(),
  "open_id": z.string().describe("支付宝用户Id").optional(),
  "out_request_no": z.string().describe("商户本次操作的请求流水号，由商户生成，请确保唯一性").optional(),
  "partner_id": z.string().describe("商户Id").optional(),
  "template_id": z.string().describe("芝麻GO配置模板Id").optional()
}