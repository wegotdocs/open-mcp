export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_messagetemplate_subscribe_query`
export const toolDescription = `模板订阅关系查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/messagetemplate/subscribe/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "open_id",
    "template_id_list",
    "user_id"
  ]
}
export const flatMap = {}