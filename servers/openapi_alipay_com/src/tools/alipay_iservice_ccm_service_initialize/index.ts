export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_service_initialize`
export const toolDescription = `isv服务初始化接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/service/initialize`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "description",
    "icon",
    "service_code",
    "service_name",
    "service_order_url",
    "spis"
  ]
}
export const flatMap = {}