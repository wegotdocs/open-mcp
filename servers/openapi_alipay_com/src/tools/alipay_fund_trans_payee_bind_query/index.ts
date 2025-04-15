export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_trans_payee_bind_query`
export const toolDescription = `资金收款账号绑定关系查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/trans/payee/bind/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "identity",
    "identity_type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}