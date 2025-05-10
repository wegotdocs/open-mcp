export { inputParams } from "./schema/root.js"

export const toolName = `ant_merchant_expand_mcc_query`
export const toolDescription = `商户mcc信息查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/ant/merchant/mcc/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "mcc_code_list"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}