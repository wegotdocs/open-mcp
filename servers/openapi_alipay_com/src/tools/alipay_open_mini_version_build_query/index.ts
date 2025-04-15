export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_version_build_query`
export const toolDescription = `小程序查询版本构建状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/version/build/query`
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