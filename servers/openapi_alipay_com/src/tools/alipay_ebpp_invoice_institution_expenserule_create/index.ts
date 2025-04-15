export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_institution_expenserule_create`
export const toolDescription = `创建费控使用规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/institution/expenserule/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "asset_share_source_info",
    "consume_mode",
    "enterprise_id",
    "expense_ctrl_rule_info_list",
    "expense_type_sub_category",
    "institution_id",
    "open_rule_id",
    "outer_source_id",
    "payment_policy",
    "personal_qrcode_mode",
    "standard_condition_info_list",
    "standard_desc",
    "standard_name"
  ]
}
export const flatMap = {}