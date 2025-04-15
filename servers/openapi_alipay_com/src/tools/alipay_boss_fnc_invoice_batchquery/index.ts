export { inputParams } from "./schema/root.js"

export const toolName = `alipay_boss_fnc_invoice_batchquery`
export const toolDescription = `应收发票综合查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/boss/fnc/invoice/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "apply_order_id",
    "buyer_invoice_title",
    "buyer_ipid",
    "buyer_ipids",
    "buyer_iprole_id",
    "buyer_iprole_ids",
    "inst_id",
    "invoice_channel",
    "invoice_code",
    "invoice_create_date_begin",
    "invoice_create_date_end",
    "invoice_ids",
    "invoice_material",
    "invoice_no",
    "invoice_open_date_begin",
    "invoice_open_date_end",
    "invoice_status",
    "invoice_types",
    "is_online",
    "is_red",
    "mail_status",
    "monthly_bill_no",
    "page_no",
    "page_size",
    "tracking_no"
  ]
}
export const flatMap = {}