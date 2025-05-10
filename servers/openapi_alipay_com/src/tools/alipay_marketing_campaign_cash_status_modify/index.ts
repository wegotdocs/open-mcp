export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_campaign_cash_status_modify`
export const toolDescription = `更改现金活动状态`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/campaign/cash/status/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "camp_status",
    "crowd_no"
  ]
}
export const flatMap = {}