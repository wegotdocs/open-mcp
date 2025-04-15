export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_audit_submit`
export const toolDescription = `小程序版本提交审核`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/audit/submit`
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
    "app_version",
    "bundle_id",
    "license_info",
    "memo",
    "mini_app_id",
    "mini_category_ids",
    "open_id",
    "out_door_pic",
    "pid",
    "screen_shot_list",
    "service_email",
    "service_phone",
    "special_license_pic_list",
    "version_desc"
  ]
}
export const flatMap = {}