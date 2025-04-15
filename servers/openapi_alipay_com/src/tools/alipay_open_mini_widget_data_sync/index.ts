export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_widget_data_sync`
export const toolDescription = `小程序橱窗数据同步`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/widget/data/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "activity_list",
    "data_type",
    "goods_list",
    "mini_app_id",
    "pid"
  ]
}
export const flatMap = {}