export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_widget_goods_upload`
export const toolDescription = `小部件商品上传`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/widget/goods/upload`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "goods_list",
    "mini_app_id",
    "pid"
  ]
}
export const flatMap = {}