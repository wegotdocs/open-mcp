export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_live_channel_query`
export const toolDescription = `渠道信息查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/live/channel/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "secret"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}