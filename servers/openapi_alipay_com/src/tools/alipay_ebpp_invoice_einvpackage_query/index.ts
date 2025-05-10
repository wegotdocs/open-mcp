export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_einvpackage_query`
export const toolDescription = `查询用户发票包的明细信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/einvpackage/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "encrypted_uid",
    "package_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}