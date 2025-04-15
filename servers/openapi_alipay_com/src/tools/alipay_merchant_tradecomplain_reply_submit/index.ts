export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_tradecomplain_reply_submit`
export const toolDescription = `商家留言回复`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/tradecomplain/reply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "complain_event_id",
    "reply_content",
    "reply_images"
  ]
}
export const flatMap = {}