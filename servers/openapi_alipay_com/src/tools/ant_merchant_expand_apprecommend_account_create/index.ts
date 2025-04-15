export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_apprecommend_account_create`
export const toolDescription = `关联账号和小程序`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/apprecommend/account/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "acc_no",
    "app_no"
  ]
}
export const flatMap = {}