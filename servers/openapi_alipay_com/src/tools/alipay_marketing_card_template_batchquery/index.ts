export { inputParams } from "./schema/root.js"

export const toolName = `alipay_marketing_card_template_batchquery`
export const toolDescription = `会员卡模板批量查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/marketing/card/template/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "page_no",
    "page_size"
  ]
}
export const flatMap = {}