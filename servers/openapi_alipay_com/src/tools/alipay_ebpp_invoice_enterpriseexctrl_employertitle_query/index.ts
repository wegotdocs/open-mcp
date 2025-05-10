export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterpriseexctrl_employertitle_query`
export const toolDescription = `查询企业抬头`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterpriseexctrl/employertitle/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "account_id",
    "enterprise_id",
    "agreement_no",
    "title_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}