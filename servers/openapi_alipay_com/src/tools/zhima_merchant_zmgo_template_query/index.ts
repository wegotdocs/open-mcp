export { inputParams } from "./schema/root.js"

export const toolName = `zhima_merchant_zmgo_template_query`
export const toolDescription = `芝麻GO模板查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/merchant/zmgo/template/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "template_no",
    "partner_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}