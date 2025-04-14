export { inputParams } from "./schema/root.js"

export const toolName = `zhima_customer_jobworth_picture_upload`
export const toolDescription = `职得工作证图片上传`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/customer/jobworth/picture/upload`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "content",
    "pic_type"
  ]
}
export const flatMap = {}