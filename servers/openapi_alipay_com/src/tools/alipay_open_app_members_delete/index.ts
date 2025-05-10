export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_members_delete`
export const toolDescription = `应用删除成员`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/members/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "user_id",
    "open_id",
    "role"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}