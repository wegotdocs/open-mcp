export { inputParams } from "./schema/root.js"

export const toolName = `alipay_mobile_public_follow_list`
export const toolDescription = `获取关注者列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/mobile/public/follow/list`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "biz_content"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}