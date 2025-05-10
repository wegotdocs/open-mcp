export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_service_close`
export const toolDescription = `关闭租户开通的isv服务接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/service/close`
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