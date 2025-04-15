export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_title_list_get`
export const toolDescription = `获取指定用户所有的有效抬头列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/title/list/get`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "auth_token",
    "user_id",
    "open_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}