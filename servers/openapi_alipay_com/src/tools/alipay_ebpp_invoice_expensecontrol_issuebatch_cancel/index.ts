export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expensecontrol_issuebatch_cancel`
export const toolDescription = `作废额度发放`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expensecontrol/issuebatch/cancel`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enterprise_id",
    "institution_id",
    "issue_batch_id"
  ]
}
export const flatMap = {}