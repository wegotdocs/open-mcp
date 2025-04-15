export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_customs_declare`
export const toolDescription = `统一收单报关接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/customs/declare`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "amount",
    "buyer_info",
    "customs_place",
    "declare_mode",
    "deposit_trade_no",
    "is_split",
    "merchant_customs_code",
    "merchant_customs_name",
    "merchant_id",
    "out_request_no",
    "out_trade_no",
    "sub_out_biz_no",
    "trade_no"
  ]
}
export const flatMap = {}