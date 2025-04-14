export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_token_batchquery`
export const toolDescription = `根据查询令牌获取发票要素列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/token/batchquery`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "invoice_token",
    "scene"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}