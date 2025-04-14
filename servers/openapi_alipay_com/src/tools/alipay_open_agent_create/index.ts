export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_agent_create`
export const toolDescription = `开启代商户签约、创建应用事务`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/agent/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account",
    "contact_info",
    "order_ticket",
    "sign_mode"
  ]
}
export const flatMap = {}