export { inputParams } from "./schema/root.js"

export const toolName = `zhima_merchant_subsidiaries_close`
export const toolDescription = `关闭子商户信息工单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/merchant/subsidiaries/close`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "order_no"
  ]
}
export const flatMap = {}