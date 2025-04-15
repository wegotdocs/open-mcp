export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_department_info_query`
export const toolDescription = `查询部门详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/department/info/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "department_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}