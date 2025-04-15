export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterpriseconsume_openrulerelation_create`
export const toolDescription = `新增开票规则并绑定费控规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterpriseconsume/openrulerelation/create`
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
    "standard_id_list"
  ]
}
export const flatMap = {}