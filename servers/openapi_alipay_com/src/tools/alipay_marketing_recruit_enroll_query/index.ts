export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_recruit_enroll_query`
export const toolDescription = `报名详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/recruit/enroll/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "out_biz_no",
    "enroll_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}