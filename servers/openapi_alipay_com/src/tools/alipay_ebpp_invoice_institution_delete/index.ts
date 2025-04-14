export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_institution_delete`
export const toolDescription = `制度删除`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/institution/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "account_id",
    "agreement_no",
    "enterprise_id",
    "institution_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}