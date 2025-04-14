export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_create`
export const toolDescription = `统一收单交易创建接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_sign_params",
    "alipay_store_id",
    "bkagent_req_info",
    "body",
    "business_params",
    "buyer_id",
    "buyer_logon_id",
    "buyer_open_id",
    "disable_pay_channels",
    "discountable_amount",
    "enable_pay_channels",
    "ext_user_info",
    "extend_params",
    "goods_detail",
    "logistics_detail",
    "merchant_order_no",
    "notify_url",
    "op_app_id",
    "op_buyer_open_id",
    "operator_id",
    "out_trade_no",
    "passback_params",
    "product_code",
    "query_options",
    "receiver_address_info",
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