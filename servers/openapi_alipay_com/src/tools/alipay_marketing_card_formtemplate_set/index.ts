export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_formtemplate_set`
export const toolDescription = `会员卡开卡表单模板配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/formtemplate/set`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "fields",
    "template_id"
  ]
}
export const flatMap = {}