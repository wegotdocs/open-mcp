export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_inner_members_add`
export const toolDescription = `内部链路添加开发成员`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/inner/members/add`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_origin",
    "domain_account",
    "login_id",
    "mini_app_id",
    "type"
  ]
}
export const flatMap = {}