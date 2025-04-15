export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_enterprise_delete`
export const toolDescription = `企业注销`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/enterprise/delete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enterprise_id"
  ]
}
export const flatMap = {}