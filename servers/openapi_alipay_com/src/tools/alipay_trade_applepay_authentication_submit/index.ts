export { inputParams } from "./schema/root.js"

export const toolName = `alipay_trade_applepay_authentication_submit`
export const toolDescription = `ApplePay支付鉴权提交`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/trade/applepay/authentication/submit`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "authentication_results",
    "device_identifier",
    "dpan_identifier",
    "transaction_identifier"
  ]
}
export const flatMap = {}