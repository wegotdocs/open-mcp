export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_isv_sales_sync`
export const toolDescription = `商户销售数据回传接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/isv/sales/sync`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "merchant_sales_detail"
  ]
}
export const flatMap = {}