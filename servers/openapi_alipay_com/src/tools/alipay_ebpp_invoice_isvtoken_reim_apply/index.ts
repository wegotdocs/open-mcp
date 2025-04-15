export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_isvtoken_reim_apply`
export const toolDescription = `获取报销授权令牌`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/isvtoken/reim/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "isv_app_code"
  ]
}
export const flatMap = {}