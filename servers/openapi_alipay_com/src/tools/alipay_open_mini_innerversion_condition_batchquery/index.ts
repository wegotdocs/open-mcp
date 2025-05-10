export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_condition_batchquery`
export const toolDescription = `根据状态批量查询版本信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/condition/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_origin",
    "bundle_id",
    "mini_app_id",
    "page_num",
    "page_size",
    "version_status"
  ]
}
export const flatMap = {}