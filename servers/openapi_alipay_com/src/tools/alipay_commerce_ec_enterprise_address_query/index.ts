export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_enterprise_address_query`
export const toolDescription = `企业地址查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/enterprise/address`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "account_id",
    "agreement_no",
    "address_id",
    "city_code",
    "page_num",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}