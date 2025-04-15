export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_matchuser_label_create`
export const toolDescription = `用户打标接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/matchuser/label/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "label_id",
    "label_value",
    "matchers"
  ]
}
export const flatMap = {}