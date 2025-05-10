export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_pdeduct_sign_cancel`
export const toolDescription = `缴费直连代扣取消签约`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/pdeduct/sign/cancel`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agent_channel",
    "agent_code",
    "agreement_id",
    "open_id",
    "pay_password_token",
    "user_id"
  ]
}
export const flatMap = {}