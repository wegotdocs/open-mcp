export { inputParams } from "./schema/root.js"

export const toolName = `datadigital_fincloud_generalsaas_face_check_initialize`
export const toolDescription = `活体检测初始化`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/datadigital/fincloud/generalsaas/face/check/initialize`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_code",
    "outer_order_no"
  ]
}
export const flatMap = {}