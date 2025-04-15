export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_department_delete`
export const toolDescription = `企业部门删除`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/department/delete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "department_id",
    "enterprise_id"
  ]
}
export const flatMap = {}