export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_label_user_query`
export const toolDescription = `公众号标签管理-查询用户标签`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/label/user/query`
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