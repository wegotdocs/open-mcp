export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_voucherpackage_query`
export const toolDescription = `券包详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/voucherpackage/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "voucher_package_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}