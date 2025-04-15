export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_bill_ereceiptagent_apply`
export const toolDescription = `ISV代理商户申请电子回单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/bill/ereceiptagent/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no",
    "agreement_type",
    "end_time",
    "key",
    "start_time",
    "type"
  ]
}
export const flatMap = {}