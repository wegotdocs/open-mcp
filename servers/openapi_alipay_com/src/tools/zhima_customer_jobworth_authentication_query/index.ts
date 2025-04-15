export { inputParams } from "./schema/root.js"

export const toolName = `zhima_customer_jobworth_authentication_query`
export const toolDescription = `职得身份认证查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/customer/jobworth/authentication`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "conn_key",
    "once_token",
    "query_type",
    "identity_type",
    "service_id",
    "user_id",
    "open_id",
    "cert_no",
    "cert_type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}