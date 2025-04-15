export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_resource_record_notify`
export const toolDescription = `提供给淘联盟备案信息接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/resource/record/notify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "author_id",
    "mini_app_id",
    "params",
    "site_id",
    "source",
    "taobao_id",
    "taobao_nick"
  ]
}
export const flatMap = {}