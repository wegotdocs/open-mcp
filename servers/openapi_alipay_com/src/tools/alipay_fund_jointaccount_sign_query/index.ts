export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_sign_query`
export const toolDescription = `企业签约结果查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/sign/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "product_code",
    "biz_scene",
    "out_biz_no",
    "account_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}