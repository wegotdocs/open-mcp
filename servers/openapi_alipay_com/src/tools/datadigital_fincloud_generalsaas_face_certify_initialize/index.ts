export { inputParams } from "./schema/root.js"

export const toolName = `datadigital_fincloud_generalsaas_face_certify_initialize`
export const toolDescription = `跳转支付宝人脸核身初始化`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/datadigital/fincloud/generalsaas/face/certify/initialize`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_code",
    "face_contrast_picture",
    "identity_param",
    "merchant_config",
    "outer_order_no"
  ]
}
export const flatMap = {}