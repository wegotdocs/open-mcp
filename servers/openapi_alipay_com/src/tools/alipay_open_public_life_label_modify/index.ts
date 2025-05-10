export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_life_label_modify`
export const toolDescription = `标签修改接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/life/label/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "label_id",
    "label_name"
  ]
}
export const flatMap = {}