export { inputParams } from "./schema/root.js"

export const toolName = `alipay_security_data_sss_create`
export const toolDescription = `文档回归测试勿动openapi_openid_post多场景`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/security/data/sss/create/{a}`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "b",
    "b_open_id"
  ],
  "header": [],
  "path": [
    "a"
  ],
  "cookie": [],
  "body": [
    "area_code",
    "f"
  ]
}
export const flatMap = {}