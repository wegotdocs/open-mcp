export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerapp_pluginservice_publish`
export const toolDescription = `插件发布能力中心`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerapp/pluginservice/publish`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "ability_type_list",
    "app_logo",
    "app_origin",
    "description",
    "detail_for_client",
    "detail_for_pc",
    "mini_app_id",
    "sell_crowd",
    "show_type",
    "title",
    "visit_url_for_pc"
  ]
}
export const flatMap = {}