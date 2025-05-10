export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_info_modify`
export const toolDescription = `生活号基础信息修改接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/info/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_name",
    "auth_pic",
    "background_url",
    "introduction",
    "license_url",
    "logo_url",
    "notify_url",
    "public_greeting",
    "shop_pics"
  ]
}
export const flatMap = {}