export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_shop_receiptaccount_save`
export const toolDescription = `店铺增加收单账号`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/shop/receiptaccount/save`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "promise",
    "receipt_account_id",
    "shop_id"
  ]
}
export const flatMap = {}