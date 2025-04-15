export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_violation_violationdetail_query`
export const toolDescription = `违规记录详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/violation/violationdetail/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "violation_record_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}