export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_message_total_send`
export const toolDescription = `群发消息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/message/total/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "articles",
    "msg_type",
    "text"
  ]
}
export const flatMap = {}