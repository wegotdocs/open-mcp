export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_miniapp_brand_submit`
export const toolDescription = `小程序品牌提交认证`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/miniapp/brand/submit`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "apply_type",
    "authorize_info",
    "brand_id",
    "brand_name",
    "brand_registration_info",
    "id_materials"
  ]
}
export const flatMap = {}