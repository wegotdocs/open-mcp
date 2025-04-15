export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_life_label_create`
export const toolDescription = `创建标签接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/life/label/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "data_type",
    "label_name"
  ]
}
export const flatMap = {}