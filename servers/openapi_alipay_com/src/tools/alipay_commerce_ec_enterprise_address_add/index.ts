export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_enterprise_address_add`
export const toolDescription = `企业地址添加`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/enterprise/address`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "address",
    "agreement_no",
    "city_code",
    "city_name",
    "community",
    "enterprise_id",
    "latitude",
    "longitude",
    "mark",
    "poi_id"
  ]
}
export const flatMap = {}