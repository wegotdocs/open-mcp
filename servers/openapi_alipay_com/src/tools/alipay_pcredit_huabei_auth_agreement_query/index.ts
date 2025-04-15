export { inputParams } from "./schema/root.js"

export const toolName = `alipay_pcredit_huabei_auth_agreement_query`
export const toolDescription = `花芝轻会员协议查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/pcredit/huabei/auth/agreement/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "agreement_no",
    "alipay_user_id",
    "open_id",
    "out_sign_no",
    "auth_scene"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}