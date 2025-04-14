export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_tips_delivery_batchquery`
export const toolDescription = `小程序收藏引导投放活动配置批量查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/tips/delivery/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "page_number",
    "page_size"
  ]
}
export const flatMap = {}