export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_alipaypoint_budgetlib_query`
export const toolDescription = `查询集分宝预算库详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/alipaypoint/budgetlib/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "budget_code"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}