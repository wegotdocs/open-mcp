export { inputParams } from "./schema/root.js"

export const toolName = `alipay_mobile_public_message_total_send`
export const toolDescription = `群发消息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/mobile/public/message/total/send`
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