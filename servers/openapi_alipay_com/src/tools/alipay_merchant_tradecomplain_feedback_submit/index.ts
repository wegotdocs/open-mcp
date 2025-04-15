export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_tradecomplain_feedback_submit`
export const toolDescription = `商家处理交易投诉`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/tradecomplain/feedback`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "complain_event_id",
    "feedback_code",
    "feedback_content",
    "feedback_images",
    "operator"
  ]
}
export const flatMap = {}