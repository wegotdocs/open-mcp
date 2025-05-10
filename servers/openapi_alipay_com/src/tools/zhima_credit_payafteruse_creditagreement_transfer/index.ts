export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_payafteruse_creditagreement_transfer`
export const toolDescription = `芝麻信用服务授权`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/payafteruse/creditagreement/transfer`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "category_id",
    "credit_agreement_id",
    "deduct_agreement_no",
    "extend_params",
    "operation_type",
    "out_agreement_no",
    "product_code",
    "zm_service_id"
  ]
}
export const flatMap = {}