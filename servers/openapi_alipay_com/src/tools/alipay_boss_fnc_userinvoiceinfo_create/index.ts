export { inputParams } from "./schema/root.js"

export const toolName = `alipay_boss_fnc_userinvoiceinfo_create`
export const toolDescription = `新增客户开票资料`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/boss/fnc/userinvoiceinfo/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "accept_electronic",
    "address",
    "addressing",
    "auto",
    "bank_account",
    "bank_name",
    "business_licence_url",
    "hold",
    "ip_role_id",
    "open_account_permit_url",
    "operator",
    "operator_type",
    "other_qualification_url",
    "ou",
    "tax_no",
    "tax_payer_quali_valid",
    "tax_payer_qualification",
    "tax_qualification_url",
    "tax_reg_cert_url",
    "telephone",
    "title",
    "user_mail_info_order_list"
  ]
}
export const flatMap = {}