export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerbaseinfo_query`
export const toolDescription = `内部小程序-应用信息查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerbaseinfo/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "mini_app_id",
    "inst_code",
    "mini_app_name",
    "app_sub_type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}