export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_instantiation_query`
export const toolDescription = `小程序实例化关系查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/instantiation/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "app_origin",
    "bundle_id",
    "mini_app_id",
    "app_version"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}