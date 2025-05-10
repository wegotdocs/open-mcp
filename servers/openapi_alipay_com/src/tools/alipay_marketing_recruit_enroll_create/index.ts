export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_recruit_enroll_create`
export const toolDescription = `招商报名提交`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/recruit/enroll/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enroll_info",
    "enroll_scene_type",
    "out_biz_no",
    "plan_id"
  ]
}
export const flatMap = {}