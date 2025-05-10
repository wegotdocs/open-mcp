export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_tips_delivery_create`
export const toolDescription = `小程序收藏引导投放活动配置创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/tips/delivery/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "delivery_content",
    "delivery_name",
    "end_time",
    "match_type",
    "match_url",
    "start_time"
  ]
}
export const flatMap = {}