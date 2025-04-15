export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_role_create`
export const toolDescription = `创建角色`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/role/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "ccs_instance_id",
    "creator_id",
    "description",
    "function_ids",
    "name"
  ]
}
export const flatMap = {}