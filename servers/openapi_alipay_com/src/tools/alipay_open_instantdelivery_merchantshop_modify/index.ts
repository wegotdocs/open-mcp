export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_instantdelivery_merchantshop_modify`
export const toolDescription = `即时配送商家门店更新`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/instantdelivery/merchantshop/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "contact_name",
    "logistics_codes",
    "out_biz_no",
    "phone",
    "shop_no"
  ]
}
export const flatMap = {}