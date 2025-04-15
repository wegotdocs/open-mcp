export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_institution_expenserule_delete`
export const toolDescription = `删除使用规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/institution/expenserule/delete`
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
    "standard_id_list"
  ]
}
export const flatMap = {}