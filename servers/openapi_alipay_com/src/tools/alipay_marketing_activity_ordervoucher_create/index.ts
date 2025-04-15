export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_ordervoucher_create`
export const toolDescription = `创建商家券活动`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/ordervoucher/activity`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "activity_base_info",
    "activity_name",
    "belong_merchant_info",
    "biz_tag",
    "code_mode",
    "customer_guide",
    "merchant_access_mode",
    "out_biz_no",
    "publish_end_time",
    "publish_start_time",
    "voucher_available_scope_info",
    "voucher_customer_guide_info",
    "voucher_deduct_info",
    "voucher_display_info",
    "voucher_display_pattern_info",
    "voucher_send_mode_info",
    "voucher_send_rule",
    "voucher_type",
    "voucher_use_rule",
    "voucher_use_rule_info"
  ]
}
export const flatMap = {}