export { inputParams } from "./schema/root.js"

export const toolName = `datadigital_fincloud_generalsaas_face_check_query`
export const toolDescription = `活体检测结果查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/datadigital/fincloud/generalsaas/face/check/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "certify_id",
    "need_alive_photo",
    "need_score",
    "need_quality_score",
    "need_attack_result"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}