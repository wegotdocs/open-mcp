import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业账号").optional(),
  "agreement_no": z.string().describe("授权协议号").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "product_code": z.string().describe("销售产品码").optional()
}