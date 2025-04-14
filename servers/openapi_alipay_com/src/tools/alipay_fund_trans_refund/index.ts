export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_trans_refund`
export const toolDescription = `资金退回接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/trans/refund`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_scene",
    "business_params",
    "order_id",
    "out_request_no",
    "passback_params",
    "product_code",
    "refund_amount",
    "remark"
  ]
}
export const flatMap = {}