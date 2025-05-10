export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_isv_signauth_create`
export const toolDescription = `创建签约授权一体化订单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/isv/signauth/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "isv_auth_scene_infos",
    "merchant_logon_id",
    "need_app_auth",
    "sign_order_no"
  ]
}
export const flatMap = {}