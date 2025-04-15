export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_matchuser_label_delete`
export const toolDescription = `用户取消标签接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/matchuser/label/delete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "label_id",
    "matchers"
  ]
}
export const flatMap = {}