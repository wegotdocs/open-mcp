export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_advert_delete`
export const toolDescription = `生活号广告位删除接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/advert/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "advert_id",
    "advert_group"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}