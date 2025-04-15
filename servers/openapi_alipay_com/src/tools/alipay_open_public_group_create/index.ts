export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_group_create`
export const toolDescription = `用户分组创建接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/group/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "label_rule",
    "name"
  ]
}
export const flatMap = {}