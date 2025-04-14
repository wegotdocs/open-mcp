export { inputParams } from "./schema/root.js"

export const toolName = `zhima_customer_jobworth_cloudresume_query`
export const toolDescription = `智能简历基本数据查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/customer/jobworth/cloudresume/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "conn_key",
    "once_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}