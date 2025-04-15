export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_live_itemplan_modify`
export const toolDescription = `支付宝货品推广计划创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/live/itemplan/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "content",
    "end_time",
    "op_type",
    "operator_appid",
    "operator_type",
    "plan_name",
    "start_time",
    "status",
    "target_id",
    "target_range",
    "target_type"
  ]
}
export const flatMap = {}