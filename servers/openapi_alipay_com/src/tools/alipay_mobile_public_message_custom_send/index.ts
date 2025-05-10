export { inputParams } from "./schema/root.js"

export const toolName = `alipay_mobile_public_message_custom_send`
export const toolDescription = `异步单发消息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/mobile/public/message/custom/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_content"
  ]
}
export const flatMap = {}