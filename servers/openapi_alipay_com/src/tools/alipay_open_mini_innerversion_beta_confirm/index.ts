export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_innerversion_beta_confirm`
export const toolDescription = `确认邀测结果`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/innerversion/beta/confirm`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "app_origin",
    "memo",
    "mini_app_id",
    "operate",
    "pid",
    "plugin_id"
  ]
}
export const flatMap = {}