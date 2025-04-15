import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("签约花芝的业务协议号，在签约成功、结算成功等通知中回回传给商户。").optional(),
  "alipay_user_id": z.string().describe("支付宝用户ID").optional(),
  "auth_opt_id": z.string().describe("支付宝侧授权操作单据id,在结算扣款成功的通知消息中会回传。在周期扣款场景下，和trade_no必传其中一个值。").optional(),
  "memo": z.string().describe("本次退款说明").optional(),
  "open_id": z.string().describe("支付宝用户ID").optional(),
  "out_request_no": z.string().describe("外部请求号").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "refund_amount": z.string().describe("退款金额，单位为：元（人民币），精确到小数点后两位").optional(),
  "refund_type": z.string().describe("MEMBER_FEE_REFUND 会员费结算退款\tWITHHOLD_FEE_REFUND 周期扣款金额退款\t默认为MEMBER_FEE_REFUND").optional(),
  "trade_no": z.string().describe("支付宝交易号,在结算扣款成功的通知中会回传。\t在周期扣款场景下，和auth_opt_id必传其中一个值。").optional()
}