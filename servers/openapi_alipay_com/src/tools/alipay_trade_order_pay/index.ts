export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_order_pay`
export const toolDescription = `统一收单交易订单支付接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/order/pay`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "advance_payment_type",
    "buyer_id",
    "buyer_open_id",
    "buyer_pay_detail",
    "fulfillment_amount",
    "is_async_pay",
    "order_pay_mode",
    "out_request_no",
    "product_code",
    "total_amount",
    "trade_no"
  ]
}
export const flatMap = {}