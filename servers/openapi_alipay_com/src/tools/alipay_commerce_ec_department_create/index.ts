export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_department_create`
export const toolDescription = `企业部门创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/department`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "department_code",
    "department_name",
    "enterprise_id",
    "parent_department_id"
  ]
}
export const flatMap = {}