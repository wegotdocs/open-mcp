export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_merchant_enterstatus_query`
export const toolDescription = `商户入驻流程状态查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/merchant/enterstatus/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "m_short_name",
    "product_code",
    "process_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}