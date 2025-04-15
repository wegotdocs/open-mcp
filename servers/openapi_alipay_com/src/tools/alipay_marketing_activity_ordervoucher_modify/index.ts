export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_ordervoucher_modify`
export const toolDescription = `修改商家券活动基本信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/ordervoucher/activity/{activity_id}`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "activity_id"
  ],
  "cookie": [],
  "body": [
    "activity_base_info",
    "activity_name",
    "customer_guide",
    "merchant_access_mode",
    "out_biz_no",
    "publish_end_time",
    "publish_start_time",
    "voucher_available_scope_info",
    "voucher_available_scope_modify_type",
    "voucher_customer_guide_info",
    "voucher_display_info",
    "voucher_display_pattern_info",
    "voucher_send_mode_info",
    "voucher_send_rule",
    "voucher_use_rule",
    "voucher_use_rule_info"
  ]
}
export const flatMap = {}