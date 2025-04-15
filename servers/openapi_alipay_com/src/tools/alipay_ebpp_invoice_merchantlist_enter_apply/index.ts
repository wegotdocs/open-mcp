export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_merchantlist_enter_apply`
export const toolDescription = `商户批量入驻申请接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/merchantlist/enter/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "merchant_base",
    "sub_merchant_common_info",
    "sub_merchant_list"
  ]
}
export const flatMap = {}