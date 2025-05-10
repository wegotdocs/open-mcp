export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_tips_delivery_query`
export const toolDescription = `小程序收藏引导投放活动详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/tips/delivery/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "delivery_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}