export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_cityfacilitator_voucher_refund`
export const toolDescription = `地铁购票发码退款`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/cityfacilitator/voucher/refund`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "city_code",
    "trade_no"
  ]
}
export const flatMap = {}