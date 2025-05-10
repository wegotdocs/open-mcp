export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_voucherpackage_batchquery`
export const toolDescription = `券包批量查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/voucherpackage/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "page_num",
    "page_size",
    "voucher_package_purchase_start_time",
    "voucher_package_status"
  ]
}
export const flatMap = {}