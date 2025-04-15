export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_appdeploy_byappversion_query`
export const toolDescription = `通过版本查询小程序发布`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/appdeploy/byappversion/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "mini_app_id",
    "bundle_id",
    "inst_code",
    "app_version"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}