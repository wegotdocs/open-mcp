export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_enterprise_info_query`
export const toolDescription = `查询企业详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/enterprise/info`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "out_biz_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}