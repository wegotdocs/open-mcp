export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_order_sync`
export const toolDescription = `订单数据同步接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/order/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "amount",
    "buyer_id",
    "buyer_info",
    "buyer_open_id",
    "category_id",
    "discount_amount",
    "discount_info_list",
    "ext_info",
    "item_order_list",
    "journey_order_list",
    "logistics_info_list",
    "order_create_time",
    "order_modified_time",
    "order_pay_time",
    "order_type",
    "out_biz_no",
    "pay_amount",
    "pay_timeout_express",
    "send_msg",
    "service_code",
    "shop_info",
    "source_app",
    "sync_content",
    "ticket_info",
    "ticket_order_list",
    "trade_no",
    "trade_type"
  ]
}
export const flatMap = {}