export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_topic_delete`
export const toolDescription = `营销位删除接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/topic/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "topic_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}