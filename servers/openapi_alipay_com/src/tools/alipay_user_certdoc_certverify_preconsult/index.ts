export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_certdoc_certverify_preconsult`
export const toolDescription = `实名证件信息比对验证预咨询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/certdoc/certverify/preconsult`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "cert_no",
    "cert_type",
    "ext_info",
    "logon_id",
    "mobile",
    "user_name"
  ]
}
export const flatMap = {}