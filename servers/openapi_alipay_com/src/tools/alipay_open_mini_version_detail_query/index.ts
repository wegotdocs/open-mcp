export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_version_detail_query`
export const toolDescription = `小程序版本详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/version/detail/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "app_version",
    "bundle_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}