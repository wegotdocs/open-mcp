export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expensecomsue_outsource_notify`
export const toolDescription = `同步外部额度变更（交易形式）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expensecomsue/outsource/notify`
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
    "amount",
    "deal_time",
    "employee_id",
    "employee_id_type",
    "employee_open_id",
    "enterprise_id",
    "extend",
    "is_off_set",
    "out_source_id",
    "platform",
    "relate_no",
    "standard_id"
  ]
}
export const flatMap = {}