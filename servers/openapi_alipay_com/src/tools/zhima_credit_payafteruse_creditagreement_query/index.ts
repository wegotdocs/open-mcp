export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_payafteruse_creditagreement_query`
export const toolDescription = `查询服务开通/授权信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/payafteruse/creditagreement/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "out_agreement_no",
    "credit_agreement_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}