export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_personalized_extension_delete`
export const toolDescription = `扩展区删除接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/personalized/extension/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "extension_key"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}