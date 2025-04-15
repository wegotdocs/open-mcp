export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_indirect_authorder_querystatus`
export const toolDescription = `查询商家认证申请单状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/indirect/authorder/querystatus`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "order_no",
    "out_biz_no",
    "source"
  ]
}
export const flatMap = {}