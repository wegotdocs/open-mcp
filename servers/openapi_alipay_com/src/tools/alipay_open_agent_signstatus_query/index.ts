export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_agent_signstatus_query`
export const toolDescription = `查询商户某个产品的签约状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/agent/signstatus/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "pid",
    "product_codes"
  ]
}
export const flatMap = {}