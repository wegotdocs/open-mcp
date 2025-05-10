export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_operation_bank_activity_query`
export const toolDescription = `银行活动信息查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/operation/bank/activity/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "open_id",
    "user_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}