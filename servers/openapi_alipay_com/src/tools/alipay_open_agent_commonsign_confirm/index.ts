export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_agent_commonsign_confirm`
export const toolDescription = `代商户签约，提交信息确认接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/agent/commonsign/confirm`
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