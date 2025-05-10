export { inputParams } from "./schema/root.js"

export const toolName = `zhima_customer_jobworth_info_query`
export const toolDescription = `职得工作证信息查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/customer/jobworth/info/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "user_name",
    "conn_key",
    "cert_no",
    "user_id",
    "open_id",
    "back_url",
    "cert_type",
    "ka_visitor_id",
    "visitor_type",
    "visitor_name",
    "company_certificate",
    "visitor_url",
    "has_button",
    "has_number",
    "has_qr_code",
    "has_html",
    "job_id",
    "industry_id",
    "cloud_resume_scene"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}