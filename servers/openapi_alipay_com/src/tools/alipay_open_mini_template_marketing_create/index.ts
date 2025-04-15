export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_template_marketing_create`
export const toolDescription = `小程序消息运营位创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/template/marketing/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "activity_id",
    "gmt_end",
    "gmt_start",
    "template_ids",
    "title"
  ]
}
export const flatMap = {}