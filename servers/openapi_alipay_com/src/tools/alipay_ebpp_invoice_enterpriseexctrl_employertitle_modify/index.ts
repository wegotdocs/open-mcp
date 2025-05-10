export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterpriseexctrl_employertitle_modify`
export const toolDescription = `修改企业抬头`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterpriseexctrl/employertitle`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "address",
    "agreement_no",
    "bank_account",
    "bank_name",
    "enterprise_id",
    "tax_register_no",
    "telephone",
    "title_id",
    "title_name"
  ]
}
export const flatMap = {}