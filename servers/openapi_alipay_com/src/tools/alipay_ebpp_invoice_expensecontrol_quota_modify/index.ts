export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expensecontrol_quota_modify`
export const toolDescription = `修改余额/点券`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expensecontrol/quota/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "action",
    "amount",
    "enterprise_id",
    "outer_source_id",
    "quota_id",
    "share_mode"
  ]
}
export const flatMap = {}