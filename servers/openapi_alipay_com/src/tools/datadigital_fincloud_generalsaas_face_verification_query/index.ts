export { inputParams } from "./schema/root.js"

export const toolName = `datadigital_fincloud_generalsaas_face_verification_query`
export const toolDescription = `人脸核身结果查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/datadigital/fincloud/generalsaas/face/verification/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "certify_id",
    "need_alive_photo"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}