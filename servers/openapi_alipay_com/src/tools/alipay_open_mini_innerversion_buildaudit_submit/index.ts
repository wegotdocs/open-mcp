export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_buildaudit_submit`
export const toolDescription = `内部链路小程序构建并提审`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/buildaudit/submit`
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
    "build_ext",
    "bundle_id",
    "isv_app_id",
    "license_info",
    "mini_app_id",
    "mini_category_ids",
    "pid",
    "region_type",
    "screen_shot_list",
    "service_phone",
    "special_license_pic_list",
    "template_id",
    "template_version",
    "version_desc"
  ]
}
export const flatMap = {}