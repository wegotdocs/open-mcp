export { inputParams } from "./schema/root.js"

export const toolName = `alipay_security_risk_verifyidentity_miniapp_confirm`
export const toolDescription = `小程序核验服务结果确认接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/security/risk/verifyidentity/miniapp/confirm`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "challenge",
    "open_id",
    "user_id",
    "verify_id"
  ]
}
export const flatMap = {}