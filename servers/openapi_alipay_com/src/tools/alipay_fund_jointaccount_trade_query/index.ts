export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_trade_query`
export const toolDescription = `共同账户交易查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/trade/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "product_code",
    "biz_scene",
    "member_id",
    "member_open_id",
    "account_id",
    "agreement_no",
    "trade_no",
    "platform_order_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}