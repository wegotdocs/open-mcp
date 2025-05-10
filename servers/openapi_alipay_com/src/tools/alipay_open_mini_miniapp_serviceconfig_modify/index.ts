export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_miniapp_serviceconfig_modify`
export const toolDescription = `小程序设置客服方式`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/miniapp/serviceconfig/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "home_open",
    "service_config"
  ]
}
export const flatMap = {}