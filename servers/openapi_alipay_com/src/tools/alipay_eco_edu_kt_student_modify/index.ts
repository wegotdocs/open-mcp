export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_edu_kt_student_modify`
export const toolDescription = `学生信息更新`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/edu/kt/student/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "child_name",
    "isv_pid",
    "school_no",
    "school_pid",
    "status",
    "student_code",
    "student_identify",
    "student_no",
    "users"
  ]
}
export const flatMap = {}