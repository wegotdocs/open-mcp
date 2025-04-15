export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_transport_parking_enterinfo_sync`
export const toolDescription = `停车入场模板消息配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/transport/parking/enterinfo/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_query",
    "charge_info_list",
    "entrance_name",
    "entrance_number",
    "free_enter_minutes",
    "in_time",
    "is_encrypt_plate_no",
    "membership_info",
    "need_charge",
    "open_appid",
    "open_id",
    "out_serial_no",
    "parking_id",
    "plate_color",
    "plate_no",
    "service_url"
  ]
}
export const flatMap = {}