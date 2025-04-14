export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_auth_order_app_freeze`
export const toolDescription = `线上资金授权冻结接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/auth/order/app/freeze`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "amount",
    "business_params",
    "deposit_product_mode",
    "disable_pay_channels",
    "enable_pay_channels",
    "extra_param",
    "identity_params",
    "notify_url",
    "order_title",
    "out_order_no",
    "out_request_no",
    "pay_timeout",
    "payee_logon_id",
    "payee_user_id",
    "post_payments",
    "product_code",
    "scene_code",
    "settle_currency",
    "timeout_express",
    "trans_currency"
  ]
}
export const flatMap = {}