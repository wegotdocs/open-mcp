export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_institution_scopepageinfo_query`
export const toolDescription = `分页查询制度下人员`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/institution/scopepageinfo/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "account_id",
    "agreement_no",
    "enterprise_id",
    "institution_id",
    "owner_type",
    "page_num",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}