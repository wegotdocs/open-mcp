export { inputParams } from "./schema/root.js"

export const toolName = `alipay_mobile_public_menu_update`
export const toolDescription = `更新菜单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/mobile/public/menu/update`
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