export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_signflows_url_query`
export const toolDescription = `获取签署地址`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/signflows/url/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "target_app_id",
    "flow_id",
    "third_party_user_id",
    "org_third_party_user_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}