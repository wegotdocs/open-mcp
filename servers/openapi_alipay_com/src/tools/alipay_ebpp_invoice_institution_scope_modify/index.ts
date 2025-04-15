export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_institution_scope_modify`
export const toolDescription = `修改制度下适配范围`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/institution/scope/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "adapter_type",
    "add_owner_id_list",
    "add_owner_open_id_list",
    "agreement_no",
    "enterprise_id",
    "institution_id",
    "owner_type",
    "remove_owner_id_list",
    "remove_owner_open_id_list"
  ]
}
export const flatMap = {}