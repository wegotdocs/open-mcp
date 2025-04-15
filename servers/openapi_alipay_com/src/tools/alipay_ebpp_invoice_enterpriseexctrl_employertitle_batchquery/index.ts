export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterpriseexctrl_employertitle_batchquery`
export const toolDescription = `批量查询企业抬头`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterpriseexctrl/employertitle/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "agreement_no",
    "enterprise_id",
    "page_num",
    "page_size"
  ]
}
export const flatMap = {}