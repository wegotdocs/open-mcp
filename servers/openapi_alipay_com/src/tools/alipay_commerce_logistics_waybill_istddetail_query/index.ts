export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_logistics_waybill_istddetail_query`
export const toolDescription = `查询即时配送运单详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/logistics/waybill/istddetail/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "shop_no",
    "out_order_no",
    "order_no",
    "logistics_code",
    "waybill_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}