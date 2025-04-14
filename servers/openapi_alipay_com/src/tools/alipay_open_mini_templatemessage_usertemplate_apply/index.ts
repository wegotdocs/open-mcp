export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_templatemessage_usertemplate_apply`
export const toolDescription = `小程序模板消息申请`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/templatemessage/usertemplate/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "keyword_list",
    "template_library_id"
  ]
}
export const flatMap = {}