export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_sw_order_sync`
export const toolDescription = `商品订单同步`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/sw/order/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "amount",
    "link_url",
    "logistic_count",
    "logistics",
    "order_create_time",
    "order_id",
    "order_type",
    "spu_count",
    "spus",
    "status",
    "sub_status",
    "user_id"
  ]
}
export const flatMap = {}