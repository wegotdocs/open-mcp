export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_account_create`
export const toolDescription = `添加绑定商户会员号`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/account/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_id",
    "bind_account_no",
    "display_name",
    "from_user_id",
    "open_id",
    "real_name",
    "remark"
  ]
}
export const flatMap = {}