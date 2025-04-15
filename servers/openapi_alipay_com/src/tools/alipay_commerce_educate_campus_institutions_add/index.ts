export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_educate_campus_institutions_add`
export const toolDescription = `入驻学校信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/educate/campus/institutions/add`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "card_pict_url",
    "city_code",
    "inst_name",
    "inst_std_code",
    "learning_stage",
    "province_code",
    "school_property"
  ]
}
export const flatMap = {}