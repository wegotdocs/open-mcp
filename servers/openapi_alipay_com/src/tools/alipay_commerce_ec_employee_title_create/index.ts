export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_employee_title_create`
export const toolDescription = `新增员工抬头关系`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/employee/title`
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