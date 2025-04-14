export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_message_single_send`
export const toolDescription = `单发模板消息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/message/single/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "template",
    "to_open_id",
    "to_user_id"
  ]
}
export const flatMap = {}