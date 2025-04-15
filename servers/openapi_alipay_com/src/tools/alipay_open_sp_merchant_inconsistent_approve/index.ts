export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_merchant_inconsistent_approve`
export const toolDescription = `非同人商家进件资料审批`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/merchant/inconsistent/approve`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "back_card",
    "commitment_letter",
    "front_card",
    "handheld_business_license",
    "handheld_card",
    "item_code",
    "merchant_pid",
    "mini_appid",
    "out_biz_no",
    "promotor_pid"
  ]
}
export const flatMap = {}