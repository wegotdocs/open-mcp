export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_cityfacilitator_voucher_batchquery`
export const toolDescription = `地铁购票订单批量查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/cityfacilitator/voucher/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "city_code",
    "trade_nos"
  ]
}
export const flatMap = {}