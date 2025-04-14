export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_member_query`
export const toolDescription = `企业查询员工列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/member/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "product_code",
    "biz_scene",
    "account_id",
    "page_num",
    "page_size",
    "user_id",
    "open_id",
    "agreement_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}