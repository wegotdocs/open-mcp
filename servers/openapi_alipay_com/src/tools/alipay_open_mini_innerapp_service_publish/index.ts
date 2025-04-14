export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerapp_service_publish`
export const toolDescription = `小程序模板发布服务市场`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerapp/service/publish`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_logo",
    "app_origin",
    "mini_app_id",
    "pid",
    "sub_title",
    "title"
  ]
}
export const flatMap = {}