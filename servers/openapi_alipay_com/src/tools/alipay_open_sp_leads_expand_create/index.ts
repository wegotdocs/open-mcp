export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_leads_expand_create`
export const toolDescription = `在线写入商机库`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/leads/expand/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "address",
    "city_code",
    "city_name",
    "district_code",
    "district_name",
    "email",
    "latitude",
    "longitude",
    "mcc",
    "merchant_pid",
    "name",
    "out_biz_no",
    "phone",
    "province_code",
    "province_name",
    "scene"
  ]
}
export const flatMap = {}