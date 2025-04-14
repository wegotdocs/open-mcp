export { inputParams } from "./schema/root.js"

export const toolName = `alipay_boss_fnc_invoice_apply`
export const toolDescription = `应收开票申请(根据账单申请)`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/boss/fnc/invoice/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "biz_id",
    "biz_no",
    "invoice_amt",
    "invoice_type",
    "memo",
    "mthtly_bill_nos",
    "operator",
    "out_biz_type"
  ]
}
export const flatMap = {}