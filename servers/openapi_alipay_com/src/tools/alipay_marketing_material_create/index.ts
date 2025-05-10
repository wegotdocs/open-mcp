export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_material_create`
export const toolDescription = `创建支付宝素材`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/material/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "material_fields",
    "material_name",
    "material_spec_id",
    "out_biz_no"
  ]
}
export const flatMap = {}