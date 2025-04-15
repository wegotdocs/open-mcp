export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_mini_templatemessage_send`
export const toolDescription = `小程序发送模板消息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/mini/templatemessage/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "data",
    "form_id",
    "page",
    "to_open_id",
    "to_user_id",
    "user_template_id"
  ]
}
export const flatMap = {}