export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_tips_delivery_modify`
export const toolDescription = `小程序收藏引导投放活动修改`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/tips/delivery/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "delivery_id",
    "operate_type"
  ]
}
export const flatMap = {}