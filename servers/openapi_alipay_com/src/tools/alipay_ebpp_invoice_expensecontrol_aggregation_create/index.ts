export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expensecontrol_aggregation_create`
export const toolDescription = `创建费控规则聚合关系`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expensecontrol/aggregation/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "aggregation_name",
    "agreement_no",
    "standard_id_list"
  ]
}
export const flatMap = {}