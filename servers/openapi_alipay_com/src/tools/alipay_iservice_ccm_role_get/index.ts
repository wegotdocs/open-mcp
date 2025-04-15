export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_role_get`
export const toolDescription = `获取角色详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/role/get`
export const method = `get`
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