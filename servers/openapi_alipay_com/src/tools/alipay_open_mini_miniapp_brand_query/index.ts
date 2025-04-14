export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_miniapp_brand_query`
export const toolDescription = `小程序品牌提交认证后查询品牌审核结果以及商户已有品牌`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/miniapp/brand/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}