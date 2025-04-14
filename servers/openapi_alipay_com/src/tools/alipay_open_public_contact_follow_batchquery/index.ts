export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_contact_follow_batchquery`
export const toolDescription = `查询服务窗联系人关注列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/contact/follow/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "auth_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}