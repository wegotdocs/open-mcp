export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_resource_promotionsource_notify`
export const toolDescription = `提供给淘联盟推广位信息接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/resource/promotionsource/notify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "author_id",
    "params",
    "promotion_id",
    "promotion_name",
    "source"
  ]
}
export const flatMap = {}