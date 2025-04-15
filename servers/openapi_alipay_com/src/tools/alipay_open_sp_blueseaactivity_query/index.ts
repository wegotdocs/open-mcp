export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_blueseaactivity_query`
export const toolDescription = `服务商返佣活动申请单详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/blueseaactivity/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "order_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}