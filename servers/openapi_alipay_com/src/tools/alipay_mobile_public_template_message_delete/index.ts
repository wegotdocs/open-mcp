export { inputParams } from "./schema/root.js"

export const toolName = `alipay_mobile_public_template_message_delete`
export const toolDescription = `模板消息删除接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/mobile/public/template/message/delete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "template_id"
  ]
}
export const flatMap = {}