export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_agreement_permission_create`
export const toolDescription = `支付宝协议支付许可创建、服务变更接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/agreement/permission/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no",
    "business_params",
    "notice_template",
    "out_request_no",
    "total_amount"
  ]
}
export const flatMap = {}