export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_personalized_menu_delete`
export const toolDescription = `个性化菜单删除`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/personalized/menu/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "menu_key"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}