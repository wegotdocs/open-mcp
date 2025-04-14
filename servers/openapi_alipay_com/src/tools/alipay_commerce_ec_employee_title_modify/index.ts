export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_employee_title_modify`
export const toolDescription = `修改员工抬头信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/employee/title`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "create_by",
    "employee_id",
    "enterprise_id",
    "modify_by",
    "new_title_id",
    "old_title_id",
    "open_id",
    "title_tag",
    "user_id"
  ]
}
export const flatMap = {}