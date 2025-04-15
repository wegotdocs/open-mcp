export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_sw_spu_sync`
export const toolDescription = `商品库-商品信息同步`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/sw/spu/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "attribute",
    "brand",
    "category",
    "description",
    "icon",
    "is_delete",
    "library_id",
    "library_name",
    "link_url",
    "original_price",
    "price",
    "spu_id",
    "status",
    "title"
  ]
}
export const flatMap = {}