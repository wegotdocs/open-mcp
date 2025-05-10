export { inputParams } from "./schema/root.js"

export const toolName = `alipay_mobile_public_menu_add`
export const toolDescription = `创建菜单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/mobile/public/menu/add`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_content"
  ]
}
export const flatMap = {}