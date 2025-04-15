export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_user_follow_query`
export const toolDescription = `查询用户是否已经关注了生活号`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/user/follow/query`
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