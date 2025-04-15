export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_version_list_query`
export const toolDescription = `小程序版本列表查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/version/list/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "bundle_id",
    "version_status"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}