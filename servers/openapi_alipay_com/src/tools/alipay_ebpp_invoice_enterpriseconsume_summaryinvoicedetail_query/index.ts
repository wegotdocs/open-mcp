export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterpriseconsume_summaryinvoicedetail_query`
export const toolDescription = `查询汇总发票详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterpriseconsume/summaryinvoicedetail/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "account_id",
    "agreement_no",
    "summary_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}