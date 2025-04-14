export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_isv_initialize`
export const toolDescription = `ccm isv注册接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/isv/initialize`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "isv_pub_key"
  ]
}
export const flatMap = {}