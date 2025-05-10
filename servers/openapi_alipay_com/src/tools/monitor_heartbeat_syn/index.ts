export { inputParams } from "./schema/root.js"

export const toolName = `monitor_heartbeat_syn`
export const toolDescription = `验签接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/monitor/heartbeat/syn`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_content"
  ]
}
export const flatMap = {}