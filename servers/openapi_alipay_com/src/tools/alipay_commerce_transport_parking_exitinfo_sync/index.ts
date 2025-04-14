export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_transport_parking_exitinfo_sync`
export const toolDescription = `停车离场消息模板配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/transport/parking/exitinfo/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "exit_name",
    "exit_number",
    "is_encrypt_plate_no",
    "open_appid",
    "open_id",
    "out_serial_no",
    "out_time",
    "plate_color",
    "plate_no",
    "service_url"
  ]
}
export const flatMap = {}