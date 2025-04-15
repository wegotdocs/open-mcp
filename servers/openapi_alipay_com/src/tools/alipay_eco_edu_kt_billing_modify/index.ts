export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_edu_kt_billing_modify`
export const toolDescription = `教育缴费账单状态同步接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/edu/kt/billing/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "bank_success",
    "buyer_logon_id",
    "buyer_user_id",
    "buyer_user_open_id",
    "fund_change",
    "gmt_refund",
    "out_request_no",
    "out_trade_no",
    "refund_amount",
    "refund_detail_item_list",
    "refund_reason",
    "status",
    "trade_no"
  ]
}
export const flatMap = {}