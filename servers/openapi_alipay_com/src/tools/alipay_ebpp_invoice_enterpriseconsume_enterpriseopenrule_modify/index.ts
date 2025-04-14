export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterpriseconsume_enterpriseopenrule_modify`
export const toolDescription = `修改开票规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterpriseconsume/enterpriseopenrule/modify`
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
    "invoice_rule_id",
    "invoice_rule_name",
    "invoice_title_id",
    "receive_address",
    "receive_name",
    "receive_phone",
    "seller_type"
  ]
}
export const flatMap = {}