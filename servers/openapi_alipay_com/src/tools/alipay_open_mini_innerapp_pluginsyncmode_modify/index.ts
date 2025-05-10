export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerapp_pluginsyncmode_modify`
export const toolDescription = `修改插件继承模式`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerapp/pluginsyncmode/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_origin",
    "mini_app_id",
    "plugin_id",
    "sync_mode"
  ]
}
export const flatMap = {}