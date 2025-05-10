import { z } from "zod"

export const inputParams = {
  "cert_no": z.string().describe("MD5加密处理后的证件号").optional(),
  "cert_type": z.string().describe("证件类型。暂仅支持 IDENTITY_CARD （身份证）").optional(),
  "user_name": z.string().describe("用户的真实姓名").optional()
}