export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_upload`
export const toolDescription = `内部小程序-打包构建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/upload`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_origin",
    "build_app_type",
    "build_extra_info",
    "build_extra_mini_project_config",
    "build_js_permission",
    "build_main_url",
    "build_max_android_client_version",
    "build_max_ios_client_version",
    "build_min_android_client_version",
    "build_min_ios_client_version",
    "build_package_md_5",
    "build_package_name",
    "build_package_stream",
    "build_qcloud_info",
    "build_signed_pkg_url",
    "build_source_pkg_size",
    "build_source_pkg_url",
    "build_sub_url",
    "build_version",
    "builded_package_size",
    "builded_package_url",
    "bundle_id",
    "client_type",
    "inst_code",
    "mini_app_id",
    "plugin_refs"
  ]
}
export const flatMap = {}