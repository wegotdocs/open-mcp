export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_department_info_modify`
export const toolDescription = `企业部门信息修改`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/department`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "department_code",
    "department_id",
    "department_name",
    "enterprise_id",
    "parent_department_id"
  ]
}
export const flatMap = {}