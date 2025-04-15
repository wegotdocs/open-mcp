export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_ordervoucher_codedeposit`
export const toolDescription = `同步商家券券码`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/ordervoucher/activity/{activity_id}/voucher/codedeposit`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "activity_id"
  ],
  "cookie": [],
  "body": [
    "merchant_access_mode",
    "out_biz_no",
    "voucher_codes"
  ]
}
export const flatMap = {}