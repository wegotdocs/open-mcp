export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_servicemarket_order_query`
export const toolDescription = `服务市场订单明细查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/servicemarket/order/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "commodity_order_id",
    "start_page"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}