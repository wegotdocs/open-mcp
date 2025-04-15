export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_educate_campus_institutions_query`
export const toolDescription = `查询学校信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/educate/campus/institutions/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "inst_name",
    "province_code",
    "city_code",
    "inst_id",
    "inst_std_code",
    "like_property"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}