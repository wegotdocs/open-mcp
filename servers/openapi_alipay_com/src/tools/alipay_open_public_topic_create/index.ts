export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_topic_create`
export const toolDescription = `营销位添加接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/topic/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "img_url",
    "link_type",
    "link_url",
    "sub_title",
    "title",
    "topic_items"
  ]
}
export const flatMap = {}