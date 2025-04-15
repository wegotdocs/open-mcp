import { z } from "zod"

export const inputParams = {
  "out_agreement_no": z.string().describe("商户外部协议号").optional(),
  "credit_agreement_id": z.string().describe("芝麻开通/授权协议号，out_agreement_no与credit_agreement_id必填一个，推荐使用credit_agreement_id。").optional()
}