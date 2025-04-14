export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_order_query`
export const toolDescription = `商户申请单查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/order/{order_id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "order_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}