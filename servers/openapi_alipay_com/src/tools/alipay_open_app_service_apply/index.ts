export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_service_apply`
export const toolDescription = `服务提报申请`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/service/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "category_id",
    "out_biz_no",
    "schema_version",
    "service_code",
    "service_xml",
    "template_type",
    "user_service_delivery_type"
  ]
}
export const flatMap = {}