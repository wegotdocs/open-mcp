export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerapp_service_query`
export const toolDescription = `小程序服务市场搜索`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerapp/service/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "mini_app_id",
    "app_sub_type",
    "show_type",
    "keyword",
    "page_num",
    "page_size",
    "app_origin",
    "include_offline"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}