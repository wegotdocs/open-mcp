export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_iot_device_report_upload`
export const toolDescription = `设备检测报告上传`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/iot/device/report/upload`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "report_content",
    "sn"
  ]
}
export const flatMap = {}