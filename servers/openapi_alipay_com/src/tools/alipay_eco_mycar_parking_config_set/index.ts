export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_mycar_parking_config_set`
export const toolDescription = `停车ISV系统配置接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/mycar/parking/config/set`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_no",
    "interface_info_list",
    "merchant_logo",
    "merchant_name",
    "merchant_service_phone"
  ]
}
export const flatMap = {}