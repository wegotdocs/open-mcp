export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_indirect_smidbind_query`
export const toolDescription = `获取商家认证状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/indirect/smidbind/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "sub_merchant_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}