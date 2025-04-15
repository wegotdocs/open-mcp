export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_iot_device_verify`
export const toolDescription = `IoT设备绑定校验`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/iot/device/verify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_tid",
    "device_id_type",
    "device_sn",
    "merchant_type",
    "pid",
    "smid",
    "supplier_id"
  ]
}
export const flatMap = {}