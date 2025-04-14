export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_refund`
export const toolDescription = `统一收单交易退款接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/refund`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "goods_detail",
    "operator_id",
    "org_pid",
    "out_request_no",
    "out_trade_no",
    "query_options",
    "refund_advance_account",
    "refund_advance_account_type",
    "refund_amount",
    "refund_currency",
    "refund_goods_detail",
    "refund_reason",
    "refund_royalty_parameters",
    "refund_trans_out",
    "refund_trans_out_type",
    "related_settle_confirm_no",
    "store_id",
    "terminal_id",
    "trade_no"
  ]
}
export const flatMap = {}