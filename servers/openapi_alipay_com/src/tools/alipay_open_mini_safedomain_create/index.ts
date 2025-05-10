export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_safedomain_create`
export const toolDescription = `小程序添加域白名单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/safedomain/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "safe_domain"
  ]
}
export const flatMap = {}