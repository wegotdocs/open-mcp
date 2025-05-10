export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_group_crowd_query`
export const toolDescription = `人群数量查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/group/crowd/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "label_rule"
  ]
}
export const flatMap = {}