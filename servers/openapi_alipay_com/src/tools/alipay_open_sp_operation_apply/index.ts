export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_operation_apply`
export const toolDescription = `向商户发起代运营操作`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/operation/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "access_product_code",
    "alipay_account",
    "isv_scene_permissions",
    "merchant_no",
    "operate_type",
    "out_biz_no"
  ]
}
export const flatMap = {}