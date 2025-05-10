export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_violation_violationevent_batchquery`
export const toolDescription = `违规记录列表查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/violation/violationevent/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "begin_time",
    "end_time",
    "status"
  ]
}
export const flatMap = {}