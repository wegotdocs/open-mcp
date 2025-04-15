export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_jointaccount_member_batchquery`
export const toolDescription = `企业批量查询员工信息（分页）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/jointaccount/member/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "agreement_no",
    "biz_scene",
    "identity",
    "identity_type",
    "last_open_id",
    "last_user_id",
    "page_num",
    "page_size",
    "product_code"
  ]
}
export const flatMap = {}