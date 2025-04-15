export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerapp_pluginrelation_query`
export const toolDescription = `查询插件引用关系`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerapp/pluginrelation/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "mini_app_id_list",
    "page_num",
    "page_size",
    "plugin_id",
    "plugin_relation_status_list",
    "run_model_type",
    "show_beta_info"
  ]
}
export const flatMap = {}