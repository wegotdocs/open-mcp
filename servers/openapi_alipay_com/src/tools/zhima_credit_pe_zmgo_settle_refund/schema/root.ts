import { z } from "zod"

export const inputParams = {
  "agreement_id": z.string().describe("签约芝麻GO的业务协议号，在签约成功、结算成功等通知中回回传给商户。").optional(),
  "alipay_open_id": z.string().describe("支付宝用户ID").optional(),
  "alipay_user_id": z.string().describe("支付宝用户ID").optional(),
  "memo": z.string().describe("本次退款说明").optional(),
  "out_request_no": z.string().describe("外部请求号").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "refund_amount": z.string().describe("退款金额，单位为：元（人民币），精确到小数点后两位").optional(),
  "refund_type": z.string().describe("退款类型：\tMEMBER_FEE_REFUND 会员费结算退款 ，WITHHOLD_FEE_REFUND 周期扣款金额退款。\t不填写默认为 MEMBER_FEE_REFUND").optional(),
  "withhold_plan_no": z.string().describe("芝麻侧扣款计划单据号，在结算扣款成功的通知消息中会回传。").optional()
}