export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_institution_expenserule_modify`
export const toolDescription = `编辑使用规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/institution/expenserule/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "action",
    "asset_share_source_info",
    "consume_mode",
    "enterprise_id",
    "expense_ctrl_rule_info_list",
    "institution_id",
    "open_rule_id",
    "payment_policy",
    "personal_qrcode_mode",
    "standard_condition_info_list",
    "standard_desc",
    "standard_id",
    "standard_name"
  ]
}
export const flatMap = {}