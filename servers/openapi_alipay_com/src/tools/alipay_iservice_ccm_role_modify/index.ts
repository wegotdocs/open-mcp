export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_role_modify`
export const toolDescription = `更新角色`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/role/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "ccs_instance_id",
    "description",
    "function_ids",
    "id",
    "updater_id"
  ]
}
export const flatMap = {}