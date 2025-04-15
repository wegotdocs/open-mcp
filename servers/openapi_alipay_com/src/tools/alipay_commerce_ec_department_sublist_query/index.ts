export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_department_sublist_query`
export const toolDescription = `查询子部门id列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/department/sublist/query`
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