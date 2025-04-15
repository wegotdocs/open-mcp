export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_group_delete`
export const toolDescription = `用户分组删除接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/group/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "group_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}