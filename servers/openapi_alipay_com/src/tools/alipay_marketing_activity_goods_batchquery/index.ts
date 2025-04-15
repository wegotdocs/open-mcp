export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_activity_goods_batchquery`
export const toolDescription = `查询活动适用商品`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/activity/{activity_id}/goods/batchquery`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "merchant_id",
    "goods_use_type",
    "page_num",
    "page_size",
    "product_version",
    "merchant_access_mode"
  ],
  "header": [],
  "path": [
    "activity_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}