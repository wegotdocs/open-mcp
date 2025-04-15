export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_activateurl_apply`
export const toolDescription = `获取会员卡领卡投放链接`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/activateurl/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "callback",
    "follow_app_id",
    "out_string",
    "template_id"
  ]
}
export const flatMap = {}