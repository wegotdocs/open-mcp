import { z } from "zod"

export const inputParams = {
  "authentication_results": z.array(z.object({ "authentication_data": z.string().describe("已加密的鉴权数据").optional(), "authentication_mechanism": z.string().describe("鉴权类型，如：支付密码、数字签名").optional() })).describe("ApplePay核身鉴权结果，包括：支付密码、用户确认、数字签名").optional(),
  "device_identifier": z.string().describe("Apple端的设备ID").optional(),
  "dpan_identifier": z.string().describe("Apple绑定的BundleId").optional(),
  "transaction_identifier": z.string().describe("交易标识").optional()
}