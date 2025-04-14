export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_pe_zmgo_agreement_unsign`
export const toolDescription = `芝麻GO协议解约`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/pe/zmgo/agreement/unsign`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_id",
    "alipay_user_id",
    "open_id",
    "partner_id",
    "quit_type"
  ]
}
export const flatMap = {}