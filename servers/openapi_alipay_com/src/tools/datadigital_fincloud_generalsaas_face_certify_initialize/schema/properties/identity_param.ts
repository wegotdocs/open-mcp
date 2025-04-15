import { z } from "zod"

export const inputParams = {
  "cert_name": z.string().describe("填入真实姓名").optional(),
  "cert_no": z.string().describe("填入姓名相匹配的证件号码").optional(),
  "cert_type": z.string().describe("当前仅支持IDENTITY_CARD").optional(),
  "identity_type": z.string().describe("当前仅支持CERT_INFO").optional(),
  "phone_no": z.string().describe("选填手机号").optional()
}