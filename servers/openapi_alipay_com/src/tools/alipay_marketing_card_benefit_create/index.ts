export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_benefit_create`
export const toolDescription = `会员卡模板外部权益创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/benefit/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "mcard_template_benefit"
  ]
}
export const flatMap = {}