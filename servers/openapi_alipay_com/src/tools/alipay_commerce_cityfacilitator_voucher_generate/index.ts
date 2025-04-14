export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_cityfacilitator_voucher_generate`
export const toolDescription = `地铁购票核销码发码`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/cityfacilitator/voucher/generate`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "city_code",
    "site_begin",
    "site_end",
    "ticket_num",
    "ticket_price",
    "ticket_type",
    "total_fee",
    "trade_no"
  ]
}
export const flatMap = {}