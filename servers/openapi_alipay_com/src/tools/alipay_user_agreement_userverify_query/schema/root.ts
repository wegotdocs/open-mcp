import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("协议号").optional(),
  "apply_token": z.string().describe("申请时获取的token").optional()
}