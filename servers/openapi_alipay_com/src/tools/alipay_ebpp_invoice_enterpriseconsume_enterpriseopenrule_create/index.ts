export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterpriseconsume_enterpriseopenrule_create`
export const toolDescription = `新增开票规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterpriseconsume/enterpriseopenrule/create`
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
    "bill_month_day",
    "enterprise_id",
    "invoice_rule_name",
    "invoice_title_id",
    "open_mode",
    "receive_address",
    "receive_name",
    "receive_phone",
    "seller_type",
    "tag"
  ]
}
export const flatMap = {}