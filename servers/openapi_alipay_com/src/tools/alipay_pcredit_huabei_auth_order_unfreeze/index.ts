export { inputParams } from "./schema/root.js"

export const toolName = `alipay_pcredit_huabei_auth_order_unfreeze`
export const toolDescription = `花呗先享解冻或解约接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/pcredit/huabei/auth/order/unfreeze`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no",
    "alipay_user_id",
    "need_terminated",
    "open_id",
    "order_title",
    "out_request_no",
    "seller_id",
    "unfreeze_amount"
  ]
}
export const flatMap = {}