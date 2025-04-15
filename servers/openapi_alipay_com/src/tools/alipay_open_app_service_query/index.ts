export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_service_query`
export const toolDescription = `服务查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/service/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "service_code"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}