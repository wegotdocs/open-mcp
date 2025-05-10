export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_employee_info_query`
export const toolDescription = `查询员工详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/employee/info/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "employee_id",
    "open_id",
    "user_id",
    "mobile"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}