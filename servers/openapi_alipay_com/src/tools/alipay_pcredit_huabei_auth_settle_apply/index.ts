export { inputParams } from "./schema/root.js"

export const toolName = `alipay_pcredit_huabei_auth_settle_apply`
export const toolDescription = `花芝轻会员结算申请`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/pcredit/huabei/auth/settle/apply`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "action_type",
    "agreement_no",
    "alipay_user_id",
    "extend_params",
    "need_terminated",
    "open_id",
    "out_request_no",
    "pay_amount",
    "seller_id"
  ]
}
export const flatMap = {}