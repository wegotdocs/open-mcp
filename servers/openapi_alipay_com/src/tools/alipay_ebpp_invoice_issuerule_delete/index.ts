export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_issuerule_delete`
export const toolDescription = `删除发放规则`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/issuerule/delete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enterprise_id",
    "issue_rule_id_list",
    "target_id",
    "target_type"
  ]
}
export const flatMap = {}