export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_menu_modify`
export const toolDescription = `默认菜单更新接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/menu/modify`
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