export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_template_query`
export const toolDescription = `会员卡模板查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/template/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "template_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}