export { inputParams } from "./schema/root.js"

export const toolName = `zhima_customer_jobworth_position_add`
export const toolDescription = `职得工作证岗位收集`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/customer/jobworth/position/add`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "jobworth_position_info"
  ]
}
export const flatMap = {}