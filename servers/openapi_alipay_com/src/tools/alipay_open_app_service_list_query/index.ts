export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_app_service_list_query`
export const toolDescription = `服务批量查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/app/service/list/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "service_name",
    "category_id",
    "page_size",
    "page_num"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}