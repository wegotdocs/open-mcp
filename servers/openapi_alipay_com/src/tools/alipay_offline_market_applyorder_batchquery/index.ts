export { inputParams } from "./schema/root.js"

export const toolName = `alipay_offline_market_applyorder_batchquery`
export const toolDescription = `业务流水批量查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/offline/market/applyorder/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "action",
    "apply_ids",
    "biz_id",
    "biz_type",
    "end_time",
    "op_id",
    "op_role",
    "page_no",
    "page_size",
    "request_ids",
    "start_time",
    "status"
  ]
}
export const flatMap = {}