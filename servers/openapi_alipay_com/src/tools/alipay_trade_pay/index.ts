export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_pay`
export const toolDescription = `统一收单交易支付接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/pay`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "advance_payment_type",
    "agreement_params",
    "alipay_store_id",
    "auth_code",
    "auth_confirm_mode",
    "auth_no",
    "bkagent_req_info",
    "body",
    "business_params",
    "buyer_id",
    "buyer_open_id",
    "disable_pay_channels",
    "discountable_amount",
    "ext_user_info",
    "extend_params",
    "goods_detail",
    "is_async_pay",
    "merchant_order_no",
    "notify_url",
    "operator_id",
    "out_trade_no",
    "passback_params",
    "pay_params",
    "product_code",
    "promo_params",
    "query_options",
    "request_org_pid",
    "royalty_info",
    "scene",
    "seller_id",
    "settle_currency",
    "settle_info",
    "store_id",
    "sub_merchant",
    "subject",
    "terminal_id",
    "terminal_params",
    "time_expire",
    "timeout_express",
    "total_amount",
    "trans_currency",
    "undiscountable_amount"
  ]
}
export const flatMap = {}