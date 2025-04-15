export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expensescene_merchant_query`
export const toolDescription = `查询企业可用商户信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expensescene/merchant/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "account_id",
    "agreement_no",
    "enterprise_id",
    "role_id",
    "pid",
    "shop_id",
    "expense_type",
    "page_num",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}