export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_benefit_delete`
export const toolDescription = `会员卡模板外部权益删除`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/benefit/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "template_id",
    "benefit_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}