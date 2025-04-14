export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_personalized_menu_create`
export const toolDescription = `个性化菜单创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/personalized/menu/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "button",
    "group_id",
    "label_rule",
    "mobile_client_type",
    "type"
  ]
}
export const flatMap = {}