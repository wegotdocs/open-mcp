export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_instantdelivery_account_create`
export const toolDescription = `即时配送商家账户创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/instantdelivery/account/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "logistics_codes",
    "out_biz_no"
  ]
}
export const flatMap = {}