export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_account_delete`
export const toolDescription = `解除绑定商户会员号`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/account/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "agreement_id",
    "bind_account_no",
    "from_user_id",
    "open_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}