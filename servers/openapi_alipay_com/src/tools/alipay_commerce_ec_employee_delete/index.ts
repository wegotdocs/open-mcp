export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_employee_delete`
export const toolDescription = `删除员工`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/employee/delete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "employee_id",
    "enterprise_id"
  ]
}
export const flatMap = {}