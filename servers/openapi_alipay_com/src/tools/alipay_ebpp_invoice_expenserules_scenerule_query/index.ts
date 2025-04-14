export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expenserules_scenerule_query`
export const toolDescription = `查询费控规则信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expenserules/scenerule/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "account_id",
    "agreement_no",
    "enterprise_id",
    "standard_id",
    "page_num",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}