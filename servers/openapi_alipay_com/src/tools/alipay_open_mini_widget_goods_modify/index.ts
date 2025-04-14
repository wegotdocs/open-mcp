export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_widget_goods_modify`
export const toolDescription = `小部件商品修改`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/widget/goods/modify`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "buying_url",
    "goods_brand",
    "goods_comment",
    "goods_description_label",
    "goods_id",
    "goods_label",
    "goods_name",
    "goods_type",
    "main_pic_url",
    "need_public_promo",
    "order_number",
    "original_price",
    "publish_cities",
    "sell_price",
    "sell_tag_list"
  ]
}
export const flatMap = {}