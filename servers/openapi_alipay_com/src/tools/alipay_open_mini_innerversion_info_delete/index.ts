export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_info_delete`
export const toolDescription = `内部链路删除版本`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/info/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "mini_app_id",
    "app_origin",
    "bundle_id",
    "app_version",
    "pid",
    "inst_code"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}