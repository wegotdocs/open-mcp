export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_advert_modify`
export const toolDescription = `生活号广告位修改接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/advert/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "advert_id",
    "advert_items"
  ]
}
export const flatMap = {}