import { z } from "zod"

export const inputParams = {
  "product_code": z.string().describe("产品码，默认值\tENTERPRISE_PAY").optional(),
  "biz_scene": z.string().describe("场景码，联系支付宝分配").optional(),
  "account_id": z.string().describe("企业签约账户ID").optional(),
  "agreement_no": z.string().describe("平台和企业的三方授权协议号").optional(),
  "out_biz_no": z.string().describe("外部业务号").optional()
}