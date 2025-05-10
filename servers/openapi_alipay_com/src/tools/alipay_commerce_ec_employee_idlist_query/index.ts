export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_employee_idlist_query`
export const toolDescription = `查询部门下员工id列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/employee/idlist/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "department_id",
    "page_num",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}