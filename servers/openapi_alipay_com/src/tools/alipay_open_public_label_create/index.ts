export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_label_create`
export const toolDescription = `公众号标签管理-添加标签`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/label/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "name"
  ]
}
export const flatMap = {}