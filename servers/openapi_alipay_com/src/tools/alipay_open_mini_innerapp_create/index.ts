export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerapp_create`
export const toolDescription = `内部链路小程序创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerapp/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_category_ids",
    "app_desc",
    "app_english_name",
    "app_logo",
    "app_name",
    "app_origin",
    "app_slogan",
    "app_sub_type",
    "app_type",
    "isv_app_id",
    "mini_app_id",
    "mini_category_ids",
    "pid",
    "service_email",
    "service_phone"
  ]
}
export const flatMap = {}