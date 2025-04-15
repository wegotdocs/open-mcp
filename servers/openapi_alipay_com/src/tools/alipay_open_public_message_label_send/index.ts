export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_message_label_send`
export const toolDescription = `根据标签组发消息接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/message/label/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "filter",
    "material"
  ]
}
export const flatMap = {}