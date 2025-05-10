export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_template_usage_query`
export const toolDescription = `查询使用模板的小程序列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/template/usage/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "template_id",
    "page_num",
    "page_size",
    "template_version",
    "bundle_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}