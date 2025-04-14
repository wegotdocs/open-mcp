export { inputParams } from "./schema/root.js"

export const toolName = `datadigital_fincloud_generalsaas_face_certify_query`
export const toolDescription = `跳转支付宝人脸核身查询记录`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/datadigital/fincloud/generalsaas/face/certify/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "certify_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}