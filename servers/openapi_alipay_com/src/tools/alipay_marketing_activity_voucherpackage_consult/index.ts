export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_voucherpackage_consult`
export const toolDescription = `券包购买咨询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/voucherpackage/consult`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "auth_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "voucher_package_id_list"
  ]
}
export const flatMap = {}