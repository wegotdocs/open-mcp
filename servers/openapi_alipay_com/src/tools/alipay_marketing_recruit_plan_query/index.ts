export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_recruit_plan_query`
export const toolDescription = `招商方案详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/recruit/plan/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enroll_merchant",
    "plan_id"
  ]
}
export const flatMap = {}