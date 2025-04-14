export { inputParams } from "./schema/root.js"

export const toolName = `datadigital_fincloud_generalsaas_face_certify_verify`
export const toolDescription = `跳转支付宝人脸核身开始认证`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/datadigital/fincloud/generalsaas/face/certify/verify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "certify_id"
  ]
}
export const flatMap = {}