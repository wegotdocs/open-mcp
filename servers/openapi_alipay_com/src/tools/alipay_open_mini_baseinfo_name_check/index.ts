export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_baseinfo_name_check`
export const toolDescription = `小程序名称检测`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/baseinfo/name/check`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "app_name"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}