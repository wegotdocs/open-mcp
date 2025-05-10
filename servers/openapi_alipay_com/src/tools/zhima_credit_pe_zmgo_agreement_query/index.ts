export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_pe_zmgo_agreement_query`
export const toolDescription = `芝麻Go协议查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/pe/zmgo/agreement/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "agreement_id",
    "alipay_user_id",
    "open_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}