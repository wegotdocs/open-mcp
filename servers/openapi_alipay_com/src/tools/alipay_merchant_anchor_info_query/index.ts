export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_anchor_info_query`
export const toolDescription = `查询主播信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/anchor/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "user_id",
    "open_id",
    "public_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}