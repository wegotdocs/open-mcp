export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_service_delete`
export const toolDescription = `服务失效接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/service/delete`
export const method = `delete`
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