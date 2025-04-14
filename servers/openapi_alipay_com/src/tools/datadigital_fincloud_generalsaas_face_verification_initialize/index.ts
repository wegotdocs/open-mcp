export { inputParams } from "./schema/root.js"

export const toolName = `datadigital_fincloud_generalsaas_face_verification_initialize`
export const toolDescription = `人脸核身初始化`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/datadigital/fincloud/generalsaas/face/verification/initialize`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_code",
    "cert_name",
    "cert_no",
    "cert_type",
    "face_reserve_strategy",
    "identity_type",
    "nation",
    "outer_order_no",
    "phone_no"
  ]
}
export const flatMap = {}