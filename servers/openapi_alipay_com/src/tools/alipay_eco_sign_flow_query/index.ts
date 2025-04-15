export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_sign_flow_query`
export const toolDescription = `签署流程查询（E签宝）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/sign/flow/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "target_app_id",
    "flow_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}