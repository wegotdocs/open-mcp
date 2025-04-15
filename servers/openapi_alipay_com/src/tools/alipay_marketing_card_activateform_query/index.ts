export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_activateform_query`
export const toolDescription = `查询用户提交的会员卡表单信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/activateform/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "auth_token",
    "biz_type",
    "template_id",
    "request_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}