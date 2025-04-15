export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_title_dynamic_get`
export const toolDescription = `根据动态码查询发票抬头`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/title/dynamic/get`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "bar_code"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}