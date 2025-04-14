export { inputParams } from "./schema/root.js"

export const toolName = `alipay_mobile_public_template_message_query`
export const toolDescription = `模板消息查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/mobile/public/template/message/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "auth_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "template",
    "template_id"
  ]
}
export const flatMap = {}