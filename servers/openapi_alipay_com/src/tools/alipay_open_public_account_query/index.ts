export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_account_query`
export const toolDescription = `查询绑定商户会员号`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/account/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "user_id",
    "open_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}