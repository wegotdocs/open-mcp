export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_widget_goods_query`
export const toolDescription = `小部件商品查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/widget/goods/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "mini_app_id",
    "pid",
    "goods_id",
    "page_num",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}