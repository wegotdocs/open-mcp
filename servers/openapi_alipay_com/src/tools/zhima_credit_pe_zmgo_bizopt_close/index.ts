export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_pe_zmgo_bizopt_close`
export const toolDescription = `芝麻GO签约关单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/pe/zmgo/bizopt/close`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "alipay_user_id",
    "open_id",
    "out_request_no",
    "partner_id",
    "template_id"
  ]
}
export const flatMap = {}