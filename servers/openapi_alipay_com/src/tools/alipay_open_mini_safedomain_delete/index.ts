export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_safedomain_delete`
export const toolDescription = `小程序删除域白名单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/safedomain/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "safe_domain"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}