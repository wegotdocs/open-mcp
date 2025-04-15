export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_members_create`
export const toolDescription = `应用添加成员`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/members/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "logon_id",
    "role"
  ]
}
export const flatMap = {}