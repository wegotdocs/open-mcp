export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_agent_confirm`
export const toolDescription = `提交代商户签约、创建应用事务`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/agent/confirm`
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