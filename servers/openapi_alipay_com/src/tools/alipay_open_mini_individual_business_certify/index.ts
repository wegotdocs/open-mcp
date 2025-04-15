export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_individual_business_certify`
export const toolDescription = `个人账户升级为个体工商户`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/individual/business/certify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "license_no",
    "license_pic"
  ]
}
export const flatMap = {}