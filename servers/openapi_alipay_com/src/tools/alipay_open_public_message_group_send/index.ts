export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_message_group_send`
export const toolDescription = `分组消息发送接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/message/group/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "articles",
    "group_id",
    "image",
    "msg_type",
    "text"
  ]
}
export const flatMap = {}