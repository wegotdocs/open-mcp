export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_sign_flow_cancel`
export const toolDescription = `签署流程撤销（E签宝）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/sign/flow/cancel`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "target_app_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "flow_id",
    "revoke_reason"
  ]
}
export const flatMap = {}