export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_certdoc_certverify_consult`
export const toolDescription = `实名证件信息比对验证咨询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/certdoc/certverify/consult`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "auth_token",
    "verify_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}