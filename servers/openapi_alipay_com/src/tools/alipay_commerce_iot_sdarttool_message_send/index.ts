export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_iot_sdarttool_message_send`
export const toolDescription = `IOT消息服务`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/iot/sdarttool/message/send`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "bi_da",
    "device_query_type",
    "immediate_msg",
    "item_id",
    "msg_content",
    "msg_content_type",
    "msg_expire",
    "msg_priority",
    "msg_type",
    "service_id",
    "sn",
    "supplier_id"
  ]
}
export const flatMap = {}