export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_inner_members_delete`
export const toolDescription = `内部链路删除开发成员`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/inner/members/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "mini_app_id",
    "app_origin",
    "domain_account",
    "login_id",
    "type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}