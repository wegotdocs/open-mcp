export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_group_modify`
export const toolDescription = `用户分组修改接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/group/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "group_id",
    "label_rule",
    "name"
  ]
}
export const flatMap = {}