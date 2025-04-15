export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_list_query`
export const toolDescription = `企业查询代付账户列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/list/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "product_code",
    "biz_scene",
    "operate_role",
    "agreement_no",
    "identity",
    "identity_type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}