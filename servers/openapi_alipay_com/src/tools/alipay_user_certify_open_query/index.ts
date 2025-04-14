export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_certify_open_query`
export const toolDescription = `身份认证记录查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/certify/open/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "certify_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}