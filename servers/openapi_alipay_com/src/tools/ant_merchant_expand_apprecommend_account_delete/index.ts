export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_apprecommend_account_delete`
export const toolDescription = `取消关联账号和小程序`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/expand/apprecommend/account/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "app_no",
    "acc_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}