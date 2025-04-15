export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_iot_device_query`
export const toolDescription = `IoT设备绑定关系查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/iot/device/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "device_id_type",
    "biz_tid",
    "supplier_id",
    "device_sn"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}