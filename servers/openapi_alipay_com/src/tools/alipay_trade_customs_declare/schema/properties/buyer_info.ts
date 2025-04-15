import { z } from "zod"

export const inputParams = {
  "buyer_cert_no": z.string().describe("订购人身份证号。即订购人留在商户处的身份证信息").optional(),
  "buyer_name": z.string().describe("订购人姓名。即订购人留在商户处的姓名信息").optional()
}