export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_precreate`
export const toolDescription = `统一收单线下交易预创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/precreate`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "alipay_store_id",
    "bkagent_req_info",
    "body",
    "business_params",
    "buyer_logon_id",
    "code_type",
    "disable_pay_channels",
    "discountable_amount",
    "enable_pay_channels",
    "ext_user_info",
    "extend_params",
    "goods_detail",
    "merchant_order_no",
    "notify_url",
    "operator_id",
    "out_trade_no",
    "passback_params",
    "product_code",
    "qr_code_timeout_express",
    "query_options",
    "royalty_info",
    "seller_id",
    "settle_info",
    "store_id",
    "sub_merchant",
    "subject",
    "terminal_id",
    "time_expire",
    "timeout_express",
    "total_amount",
    "undiscountable_amount"
  ]
}
export const flatMap = {}