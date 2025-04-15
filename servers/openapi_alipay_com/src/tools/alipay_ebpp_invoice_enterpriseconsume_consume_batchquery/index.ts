export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterpriseconsume_consume_batchquery`
export const toolDescription = `企业因公账单查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterpriseconsume/consume/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "agreement_no",
    "consumption_end",
    "consumption_start",
    "employee_list",
    "employee_open_ids"
  ]
}
export const flatMap = {}