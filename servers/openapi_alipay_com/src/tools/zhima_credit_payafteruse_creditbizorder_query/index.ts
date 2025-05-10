export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_payafteruse_creditbizorder_query`
export const toolDescription = `信用服务订单查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/payafteruse/creditbizorder/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "credit_biz_order_id",
    "out_order_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}