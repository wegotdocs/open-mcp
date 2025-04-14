export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_follow_batchquery`
export const toolDescription = `获取关注者列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/follow/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "next_user_id",
    "open_id"
  ]
}
export const flatMap = {}