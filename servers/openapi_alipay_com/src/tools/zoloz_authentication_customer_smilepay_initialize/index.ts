export { inputParams } from "./schema/root.js"

export const toolName = `zoloz_authentication_customer_smilepay_initialize`
export const toolDescription = `人脸刷脸付初始化`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zoloz/authentication/customer/smilepay/initialize`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "service_id",
    "service_params",
    "zimmetainfo"
  ]
}
export const flatMap = {}