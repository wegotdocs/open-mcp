export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterprise_merchantrelation_create`
export const toolDescription = `创建企业商户关系`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterprise/merchantrelation/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "enterprise_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "agreement_no",
    "operator_id",
    "shop_info",
    "trade_no"
  ]
}
export const flatMap = {}