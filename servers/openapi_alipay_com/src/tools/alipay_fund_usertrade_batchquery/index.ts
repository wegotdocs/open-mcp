export { inputParams } from "./schema/root.js"

export const toolName = `alipay_fund_usertrade_batchquery`
export const toolDescription = `用户交易数据查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/fund/usertrade/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "auth_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_scene",
    "end_time",
    "page_index",
    "page_size",
    "product_code",
    "start_time"
  ]
}
export const flatMap = {}