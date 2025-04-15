export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_consume_detail_query`
export const toolDescription = `企业码账单详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/consume/detail/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enterprise_id",
    "pay_no",
    "query_options"
  ]
}
export const flatMap = {}