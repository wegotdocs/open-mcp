export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_trans_uni_transfer`
export const toolDescription = `单笔转账接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/trans/uni/transfer`
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
    "mutiple_currency_detail",
    "order_title",
    "original_order_id",
    "out_biz_no",
    "passback_params",
    "payee_info",
    "payer_info",
    "product_code",
    "remark",
    "sign_data",
    "trans_amount"
  ]
}
export const flatMap = {}