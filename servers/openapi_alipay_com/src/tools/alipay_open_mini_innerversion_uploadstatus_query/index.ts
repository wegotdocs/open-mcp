export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_uploadstatus_query`
export const toolDescription = `多端小程序-查询构建状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/uploadstatus/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "build_package_id",
    "mini_app_id",
    "build_version",
    "inst_code",
    "bundle_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}