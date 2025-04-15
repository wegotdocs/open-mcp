export { inputParams } from "./schema/root.js"

export const toolName = `zoloz_authentication_customer_ftoken_query`
export const toolDescription = `查询刷脸结果信息接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zoloz/authentication/customer/ftoken/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_type",
    "ext_info",
    "ftoken",
    "zim_id"
  ]
}
export const flatMap = {}