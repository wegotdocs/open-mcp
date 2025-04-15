export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_trans_pay`
export const toolDescription = `资金支付接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/trans/pay`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "auth_info",
    "biz_scene",
    "business_params",
    "order_title",
    "out_biz_no",
    "passback_params",
    "payee_info",
    "payer_info",
    "product_code",
    "refund_time_expire",
    "remark",
    "time_expire",
    "trans_amount"
  ]
}
export const flatMap = {}