export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_user_enterprise_query`
export const toolDescription = `用户企业列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/user/enterprise`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "user_id",
    "open_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}