export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_enterprise_unsign`
export const toolDescription = `企业解约`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/enterprise/unsignurl`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "account_id",
    "agreement_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}