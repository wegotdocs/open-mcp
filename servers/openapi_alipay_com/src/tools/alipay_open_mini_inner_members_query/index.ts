export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_inner_members_query`
export const toolDescription = `内部链路查询开发成员`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/inner/members/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "mini_app_id",
    "app_origin"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}