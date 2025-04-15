export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_tradecomplain_query`
export const toolDescription = `查询单条交易投诉详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/tradecomplain/{complain_event_id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "complain_event_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}