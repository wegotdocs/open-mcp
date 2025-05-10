export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_role_delete`
export const toolDescription = `删除角色`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/role/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "id",
    "ccs_instance_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}