export { inputParams } from "./schema/root.js"

export const toolName = `zhima_customer_jobworth_jobdata_add`
export const toolDescription = `工作证职业数据回流接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/customer/jobworth/jobdata/add`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "cert_no",
    "cert_type",
    "conn_key",
    "job_data_list",
    "open_id",
    "user_id",
    "user_name"
  ]
}
export const flatMap = {}