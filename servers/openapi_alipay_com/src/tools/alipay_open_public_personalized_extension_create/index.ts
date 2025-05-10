export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_personalized_extension_create`
export const toolDescription = `个性化扩展区创建接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/personalized/extension/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "areas",
    "label_rule"
  ]
}
export const flatMap = {}