export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_iot_sdarttool_message_query`
export const toolDescription = `消息查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/iot/sdarttool/message/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "message_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}