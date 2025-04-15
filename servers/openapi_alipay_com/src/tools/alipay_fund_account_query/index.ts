export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_account_query`
export const toolDescription = `支付宝资金账户资产查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/account/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "merchant_user_id",
    "alipay_user_id",
    "alipay_open_id",
    "account_product_code",
    "account_type",
    "account_scene_code",
    "ext_info"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}