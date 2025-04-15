export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_tips_statistic_query`
export const toolDescription = `小程序收藏引导汇总数据查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/tips/statistic/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "delivery_id",
    "query_type",
    "start_date",
    "end_date"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}