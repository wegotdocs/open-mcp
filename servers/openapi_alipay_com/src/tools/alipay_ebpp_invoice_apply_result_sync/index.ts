export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_apply_result_sync`
export const toolDescription = `ISV向支付宝同步发票申请结果`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/apply/result/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "apply_id",
    "result",
    "result_code",
    "result_msg",
    "tax_apply_id"
  ]
}
export const flatMap = {}