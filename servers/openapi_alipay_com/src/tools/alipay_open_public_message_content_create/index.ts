export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_message_content_create`
export const toolDescription = `创建图文消息内容接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/message/content/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "benefit",
    "content",
    "could_comment",
    "cover",
    "ctype",
    "ext_tags",
    "login_ids",
    "title"
  ]
}
export const flatMap = {}