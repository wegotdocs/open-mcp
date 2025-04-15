export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_appdeploy_byappid_query`
export const toolDescription = `根据APPID分页查询小程序发布信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/appdeploy/byappid/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "mini_app_id",
    "bundle_id",
    "inst_code",
    "page_num",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}