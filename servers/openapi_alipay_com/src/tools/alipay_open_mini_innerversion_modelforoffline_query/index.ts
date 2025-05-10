export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_modelforoffline_query`
export const toolDescription = `小程序线上版本包数据同步线下场景查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/modelforoffline/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "mini_app_id",
    "app_version",
    "bundle_id",
    "inst_code"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}