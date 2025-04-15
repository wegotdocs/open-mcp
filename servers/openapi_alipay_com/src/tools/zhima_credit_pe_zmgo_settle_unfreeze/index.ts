export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_pe_zmgo_settle_unfreeze`
export const toolDescription = `芝麻GO解冻接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/pe/zmgo/settle/unfreeze`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_id",
    "alipay_open_id",
    "alipay_user_id",
    "biz_time",
    "order_title",
    "out_request_no",
    "partner_id",
    "unfreeze_amount",
    "unfreeze_extend_params"
  ]
}
export const flatMap = {}