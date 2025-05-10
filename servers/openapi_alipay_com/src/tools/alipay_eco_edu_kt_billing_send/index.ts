export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_edu_kt_billing_send`
export const toolDescription = `教育缴费账单发送接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/edu/kt/billing/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "amount",
    "charge_bill_title",
    "charge_item",
    "charge_type",
    "child_name",
    "class_in",
    "end_enable",
    "ext_info",
    "gmt_end",
    "grade",
    "out_trade_no",
    "partner_id",
    "school_no",
    "school_pid",
    "student_code",
    "student_identify",
    "users"
  ]
}
export const flatMap = {}