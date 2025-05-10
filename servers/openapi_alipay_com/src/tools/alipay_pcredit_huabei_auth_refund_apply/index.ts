export { inputParams } from "./schema/root.js"

export const toolName = `alipay_pcredit_huabei_auth_refund_apply`
export const toolDescription = `花芝结算扣款费用逆向退款申请`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/pcredit/huabei/auth/refund/apply`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no",
    "alipay_user_id",
    "auth_opt_id",
    "memo",
    "open_id",
    "out_request_no",
    "partner_id",
    "refund_amount",
    "refund_type",
    "trade_no"
  ]
}
export const flatMap = {}