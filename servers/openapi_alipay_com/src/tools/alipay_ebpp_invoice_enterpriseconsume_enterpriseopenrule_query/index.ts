export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterpriseconsume_enterpriseopenrule_query`
export const toolDescription = `查询开票规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterpriseconsume/enterpriseopenrule/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "invoice_rule_id",
    "account_id",
    "agreement_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}