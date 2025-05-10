export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_consult`
export const toolDescription = `活动领取咨询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/consult`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "consult_activity_info_list",
    "merchant_access_mode",
    "merchant_id",
    "open_id",
    "user_id"
  ]
}
export const flatMap = {}