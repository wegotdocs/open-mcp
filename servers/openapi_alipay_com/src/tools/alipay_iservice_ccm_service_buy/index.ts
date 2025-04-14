export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_service_buy`
export const toolDescription = `租户开通isv服务接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/service/buy`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "service_code"
  ]
}
export const flatMap = {}