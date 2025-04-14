export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_agreement_migrate`
export const toolDescription = `代扣协议迁移`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/agreement/migrate`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no",
    "target_app_id",
    "target_invoke_app_id",
    "target_partner_id"
  ]
}
export const flatMap = {}