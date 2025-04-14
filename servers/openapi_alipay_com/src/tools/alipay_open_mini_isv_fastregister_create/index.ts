export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_isv_fastregister_create`
export const toolDescription = `ISV代创建试用小程序`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/isv/fastregister/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_name",
    "auth_notify_url",
    "out_order_no",
    "uid"
  ]
}
export const flatMap = {}