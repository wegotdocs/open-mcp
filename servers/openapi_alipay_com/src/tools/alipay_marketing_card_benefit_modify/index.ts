export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_benefit_modify`
export const toolDescription = `会员卡模板外部权益修改`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/benefit/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "benefit_id",
    "mcard_template_benefit"
  ]
}
export const flatMap = {}