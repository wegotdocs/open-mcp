export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_transport_parking_paymentinfo_sync`
export const toolDescription = `停车支付模板消息配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/transport/parking/paymentinfo/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "alipay_trade_no",
    "discount_amount",
    "discount_information",
    "free_exit_minutes",
    "inactive_user",
    "is_encrypt_plate_no",
    "mobile_number",
    "open_appid",
    "open_id",
    "out_order_no",
    "out_serial_no",
    "pay_frequency",
    "payment_amount",
    "payment_time",
    "payment_type",
    "payment_user_open_id",
    "plate_color",
    "plate_no",
    "service_url",
    "total_amount"
  ]
}
export const flatMap = {}