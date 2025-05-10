export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_enterprisepay_member_modify`
export const toolDescription = `因公付更新员工资金协议`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/enterprisepay/member/modify`
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
    "fund_ext_info",
    "group_id_list",
    "open_id",
    "operation_type_list",
    "product_code",
    "user_id"
  ]
}
export const flatMap = {}