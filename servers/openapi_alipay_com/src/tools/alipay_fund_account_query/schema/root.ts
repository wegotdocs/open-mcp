import { z } from "zod"

export const inputParams = {
  "merchant_user_id": z.string().describe("商户会员的唯一标识。如果传入的user_id为虚拟账户userId，此字段必传并比对一致性。").optional(),
  "alipay_user_id": z.string().describe("支付宝会员 id。").optional(),
  "alipay_open_id": z.string().describe("支付宝openId").optional(),
  "account_product_code": z.string().describe("开户产品码。如果查询托管子户余额，必传且必须传入与开户时传入的值一致。").optional(),
  "account_type": z.string().describe("查询的账号类型，查询余额账户值为ACCTRANS_ACCOUNT。必填。").optional(),
  "account_scene_code": z.string().describe("开户场景码，与开户产品码不可同时传递。").optional(),
  "ext_info": z.string().describe("JSON格式，传递业务扩展参数。").optional()
}