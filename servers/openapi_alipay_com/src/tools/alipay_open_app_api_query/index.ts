export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_api_query`
export const toolDescription = `查询应用可申请的接口出参敏感字段列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/api/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}