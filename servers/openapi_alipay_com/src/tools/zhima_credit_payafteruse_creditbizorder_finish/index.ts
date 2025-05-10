export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_payafteruse_creditbizorder_finish`
export const toolDescription = `结束信用服务订单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/payafteruse/creditbizorder/finish`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "credit_biz_order_id",
    "is_fulfilled",
    "out_request_no",
    "remark"
  ]
}
export const flatMap = {}