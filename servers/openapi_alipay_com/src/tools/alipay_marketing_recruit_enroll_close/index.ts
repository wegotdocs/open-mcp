export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_recruit_enroll_close`
export const toolDescription = `下线报名`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/recruit/enroll/close`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enroll_id"
  ]
}
export const flatMap = {}