export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_detail_query`
export const toolDescription = `共享资金-查询账户详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/detail/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "product_code",
    "biz_scene",
    "account_id",
    "agreement_no",
    "out_biz_no",
    "channel"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}