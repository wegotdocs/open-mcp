export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerapp_pluginuseconfig_online`
export const toolDescription = `上线插件使用端版本配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerapp/pluginuseconfig/online`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_origin",
    "bundle_id",
    "mini_app_id",
    "plugin_dev_version",
    "plugin_id"
  ]
}
export const flatMap = {}