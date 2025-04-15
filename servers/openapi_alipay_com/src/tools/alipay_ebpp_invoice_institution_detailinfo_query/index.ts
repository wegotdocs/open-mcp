export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_institution_detailinfo_query`
export const toolDescription = `制度详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/institution/detailinfo/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "account_id",
    "agreement_no",
    "enterprise_id",
    "institution_id",
    "outer_source_id",
    "owner_type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}