export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_service_schema_query`
export const toolDescription = `服务schema下发`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/service/schema/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "category_id",
    "template_type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}