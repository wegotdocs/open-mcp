export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_agreement_query`
export const toolDescription = `支付宝个人代扣协议查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/agreement/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "personal_product_code",
    "alipay_user_id",
    "alipay_open_id",
    "alipay_logon_id",
    "sign_scene",
    "external_agreement_no",
    "third_party_type",
    "agreement_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}