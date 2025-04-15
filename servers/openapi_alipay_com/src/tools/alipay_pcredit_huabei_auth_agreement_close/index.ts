export { inputParams } from "./schema/root.js"

export const toolName = `alipay_pcredit_huabei_auth_agreement_close`
export const toolDescription = `花芝协议关闭接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/pcredit/huabei/auth/agreement/close`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no",
    "alipay_user_id",
    "open_id",
    "out_request_no",
    "partner_id",
    "quit_type"
  ]
}
export const flatMap = {}