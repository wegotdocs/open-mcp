export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_edu_kt_parent_query`
export const toolDescription = `查询学生家长状态接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/edu/kt/parent/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "school_pid",
    "school_no",
    "partner_id",
    "child_name",
    "user_mobile",
    "student_code",
    "student_identify"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}