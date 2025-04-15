export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_isv_create`
export const toolDescription = `isv服务商代商户创建小程序`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/isv/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "create_mini_request"
  ]
}
export const flatMap = {}