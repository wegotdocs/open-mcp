export { inputParams } from "./schema/root.js"

export const toolName = `alipay_boss_fnc_userinvoiceinfo_modify`
export const toolDescription = `修改用户开票资料`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/boss/fnc/userinvoiceinfo/modify`
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
    "auto",
    "bank_account",
    "bank_name",
    "business_licence_url",
    "hold",
    "id",
    "open_account_permit_url",
    "operator",
    "operator_type",
    "other_qualification_url",
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