export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_enterprise_info_modify`
export const toolDescription = `修改企业基础信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/enterprise`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enterprise_alias",
    "enterprise_id",
    "enterprise_name"
  ]
}
export const flatMap = {}