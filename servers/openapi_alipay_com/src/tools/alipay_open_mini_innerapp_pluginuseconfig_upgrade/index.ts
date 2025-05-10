export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerapp_pluginuseconfig_upgrade`
export const toolDescription = `灰度端版本配置`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerapp/pluginuseconfig/upgrade`
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
    "plugin_id",
    "strategy_value"
  ]
}
export const flatMap = {}