export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_topic_modify`
export const toolDescription = `营销位修改接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/topic/modify`
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
    "topic_id",
    "topic_items"
  ]
}
export const flatMap = {}