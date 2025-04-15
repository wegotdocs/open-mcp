export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_experience_query`
export const toolDescription = `小程序体验版状态查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/experience/query`
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