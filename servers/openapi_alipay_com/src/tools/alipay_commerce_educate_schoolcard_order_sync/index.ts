export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_educate_schoolcard_order_sync`
export const toolDescription = `校园卡支付订单数据同步`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/educate/schoolcard/order/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "actual_amount",
    "applet_app_id",
    "card_balance",
    "card_no",
    "card_type",
    "create_time",
    "discount_amount",
    "goods_orders",
    "merchant_name",
    "modified_time",
    "open_id",
    "order_amount",
    "order_detail_url",
    "order_status",
    "out_biz_no",
    "pay_address",
    "pay_mode",
    "rake_back_pid",
    "school_id",
    "school_pid",
    "service_provider_name",
    "type",
    "user_id"
  ]
}
export const flatMap = {}