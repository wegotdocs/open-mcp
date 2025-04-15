export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_agent_order_query`
export const toolDescription = `查询申请单状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/agent/order/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "batch_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}