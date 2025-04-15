export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_recruit_planlist_query`
export const toolDescription = `查询可报名的方案列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/recruit/planlist/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enroll_merchant",
    "enroll_scene_type",
    "page_num",
    "page_size"
  ]
}
export const flatMap = {}