export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_employee_info_modify`
export const toolDescription = `修改员工基础信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/employee/info`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "department_ids",
    "employee_email",
    "employee_id",
    "employee_mobile",
    "employee_name",
    "employee_no",
    "enterprise_id",
    "profiles",
    "role_list"
  ]
}
export const flatMap = {}