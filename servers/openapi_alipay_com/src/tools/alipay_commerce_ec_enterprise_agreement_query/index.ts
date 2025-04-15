export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_enterprise_agreement_query`
export const toolDescription = `查询企业签约企业码信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/enterprise/agreement`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "account_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}