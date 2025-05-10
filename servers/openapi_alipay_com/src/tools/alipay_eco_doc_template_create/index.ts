export { inputParams } from "./schema/root.js"

export const toolName = `alipay_eco_doc_template_create`
export const toolDescription = `创建合同模板（E签宝）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/eco/doc/template/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "target_app_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "content_md_5",
    "content_type",
    "convert_to_pdf",
    "file_name"
  ]
}
export const flatMap = {}