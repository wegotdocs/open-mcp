export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_default_extension_create`
export const toolDescription = `默认扩展区创建接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/default/extension/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "areas"
  ]
}
export const flatMap = {}