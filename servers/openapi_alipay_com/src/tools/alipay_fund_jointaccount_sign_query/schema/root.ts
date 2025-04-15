import { z } from "zod"

export const inputParams = {
  "product_code": z.string().describe("产品码，默认值\tENTERPRISE_PAY").optional(),
  "biz_scene": z.string().describe("场景码，联系支付宝分配").optional(),
  "out_biz_no": z.string().describe("外部业务号，查询对应账户状态，优先级高于account_id").optional(),
  "account_id": z.string().describe("企业签约账户ID,用于外部商户已获取企业签约ID，查询账户状态").optional()
}