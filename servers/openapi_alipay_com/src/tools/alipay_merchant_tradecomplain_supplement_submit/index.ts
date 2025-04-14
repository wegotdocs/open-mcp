export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_tradecomplain_supplement_submit`
export const toolDescription = `商家补充凭证`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/tradecomplain/supplement`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "complain_event_id",
    "supplement_content",
    "supplement_images"
  ]
}
export const flatMap = {}