export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_query`
export const toolDescription = `会员卡查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "card_user_info",
    "ext_info",
    "target_card_no",
    "target_card_no_type",
    "template_id"
  ]
}
export const flatMap = {}