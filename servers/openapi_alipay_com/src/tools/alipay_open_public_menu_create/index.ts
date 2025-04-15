export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_menu_create`
export const toolDescription = `默认菜单创建接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/menu/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "button",
    "type"
  ]
}
export const flatMap = {}