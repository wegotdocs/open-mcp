export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_indirect_authorder_close`
export const toolDescription = `商家认证申请单撤销`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/indirect/authorder/close`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "order_no",
    "out_biz_no"
  ]
}
export const flatMap = {}