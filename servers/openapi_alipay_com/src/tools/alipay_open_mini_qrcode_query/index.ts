export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_qrcode_query`
export const toolDescription = `查询普通二维码`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/qrcode/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "page_no",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}