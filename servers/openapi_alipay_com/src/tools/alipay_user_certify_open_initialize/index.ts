export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_certify_open_initialize`
export const toolDescription = `身份认证初始化服务`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/certify/open/initialize`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_code",
    "face_contrast_picture",
    "identity_param",
    "merchant_config",
    "outer_order_no"
  ]
}
export const flatMap = {}