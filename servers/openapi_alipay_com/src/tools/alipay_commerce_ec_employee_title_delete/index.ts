export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_employee_title_delete`
export const toolDescription = `删除员工抬头信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/employee/title/delete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "employee_title_list"
  ]
}
export const flatMap = {}