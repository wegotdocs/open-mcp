export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_payafteruse_creditbizorder_order`
export const toolDescription = `芝麻信用服务下单（免用户确认场景）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/payafteruse/creditbizorder/order`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "amount_type",
    "body",
    "category_id",
    "commercial_sub_mode",
    "credit_agreement_id",
    "credit_commercial_mode",
    "extend_params",
    "order_amount",
    "out_order_no",
    "payment_total_times",
    "product_code",
    "stage_period_type",
    "subject"
  ]
}
export const flatMap = {}