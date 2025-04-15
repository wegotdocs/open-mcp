export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_nobuild_upload`
export const toolDescription = `手淘小程序产物包免构建版本上传`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/nobuild/upload`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "build_extra_info",
    "build_js_permission",
    "build_main_url",
    "build_qcloud_info",
    "build_version",
    "builded_package_size",
    "builded_package_url",
    "builded_plugin_size",
    "builded_plugin_url",
    "bundle_id",
    "components",
    "inst_code",
    "mini_app_id",
    "new_builded_package_size",
    "new_builded_package_url",
    "new_builded_plugin_size",
    "new_builded_plugin_url",
    "no_sign",
    "plugin_refs",
    "sub_packages"
  ]
}
export const flatMap = {}