export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_agreement_executionplan_modify`
export const toolDescription = `周期性扣款协议执行计划修改接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/agreement/executionplan/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no",
    "deduct_time",
    "memo"
  ]
}
export const flatMap = {}