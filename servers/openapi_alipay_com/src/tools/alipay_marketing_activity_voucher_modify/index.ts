export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_voucher_modify`
export const toolDescription = `修改支付券基本信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/voucher/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "activity_base_info",
    "activity_id",
    "merchant_access_mode",
    "out_biz_no",
    "publish_end_time",
    "voucher_available_scope_info",
    "voucher_send_mode_info",
    "voucher_use_rule",
    "voucher_use_rule_info"
  ]
}
export const flatMap = {}