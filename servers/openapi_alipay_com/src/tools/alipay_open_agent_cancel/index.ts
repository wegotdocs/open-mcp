export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_agent_cancel`
export const toolDescription = `取消代商户签约、创建应用事务`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/agent/cancel`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "batch_no"
  ]
}
export const flatMap = {}