export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerapp_plugin_order`
export const toolDescription = `小程序代商户订购插件`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerapp/plugin/order`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_origin",
    "merchandise_id",
    "mini_app_id",
    "request_id"
  ]
}
export const flatMap = {}