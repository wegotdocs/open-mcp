export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_agreement_unsign`
export const toolDescription = `支付宝个人代扣协议解约接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/agreement/unsign`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_no",
    "alipay_logon_id",
    "alipay_open_id",
    "alipay_user_id",
    "extend_params",
    "external_agreement_no",
    "notify_url",
    "operate_type",
    "personal_product_code",
    "sign_scene",
    "third_party_type"
  ]
}
export const flatMap = {}