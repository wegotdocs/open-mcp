export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_members_query`
export const toolDescription = `应用查询成员列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/members/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "role"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}