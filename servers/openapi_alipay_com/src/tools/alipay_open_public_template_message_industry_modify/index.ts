export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_template_message_industry_modify`
export const toolDescription = `模板消息行业设置修改接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/template/message/industry/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "primary_industry_code",
    "primary_industry_name",
    "secondary_industry_code",
    "secondary_industry_name"
  ]
}
export const flatMap = {}