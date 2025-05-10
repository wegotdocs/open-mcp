export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_orderinfo_sync`
export const toolDescription = `支付宝订单信息同步接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/orderinfo/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_type",
    "order_biz_info",
    "orig_request_no",
    "out_request_no",
    "trade_no"
  ]
}
export const flatMap = {}