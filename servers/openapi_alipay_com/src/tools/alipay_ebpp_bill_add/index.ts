export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_bill_add`
export const toolDescription = `创建账单`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/bill/add`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "auth_token"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "bank_bill_no",
    "bill_date",
    "bill_key",
    "charge_inst",
    "extend_field",
    "merchant_order_no",
    "mobile",
    "order_type",
    "owner_name",
    "pay_amount",
    "service_amount",
    "sub_order_type",
    "traffic_location",
    "traffic_regulations"
  ]
}
export const flatMap = {}