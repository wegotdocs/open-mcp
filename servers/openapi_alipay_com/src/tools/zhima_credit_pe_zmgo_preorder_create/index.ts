export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_pe_zmgo_preorder_create`
export const toolDescription = `芝麻GO签约预创单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/pe/zmgo/preorder/create`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "alipay_open_id",
    "alipay_user_id",
    "biz_time",
    "custom_temp_conf",
    "expire_aisle_data",
    "ext_template_conf",
    "extend_params",
    "freeze_amount",
    "isv_pid",
    "out_request_no",
    "partner_id",
    "partner_user_identifier",
    "pay_aisle_data",
    "sign_aisle_data",
    "template_id",
    "timeout_express"
  ]
}
export const flatMap = {}