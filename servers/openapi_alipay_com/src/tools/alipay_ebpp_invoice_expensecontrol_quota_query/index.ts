export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expensecontrol_quota_query`
export const toolDescription = `查询余额/点券`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expensecontrol/quota/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "agreement_no",
    "enterprise_id",
    "owner_id",
    "owner_open_id",
    "owner_type",
    "page_num",
    "page_size",
    "quota_id_list",
    "quota_type",
    "target_id",
    "target_type"
  ]
}
export const flatMap = {}