export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_advance_consult`
export const toolDescription = `订单咨询服务`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/advance/consult`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "alipay_user_id",
    "consult_scene",
    "industry_product_code",
    "sub_merchant_id",
    "sub_merchant_type",
    "agreement_no",
    "estimated_order_amount",
    "out_trade_no",
    "need_user_risk_prediction",
    "trade_digest",
    "user_out_binding_phone"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}