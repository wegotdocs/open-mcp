export { inputParams } from "./schema/root.js"

export const toolName = `alipay_mobile_public_template_message_get`
export const toolDescription = `模板消息领取接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/mobile/public/template/message/get`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "template_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}