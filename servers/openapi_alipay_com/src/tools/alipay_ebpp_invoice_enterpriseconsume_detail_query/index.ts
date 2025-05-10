export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterpriseconsume_detail_query`
export const toolDescription = `凭证详情查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterpriseconsume/detail/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "account_id",
    "agreement_no",
    "voucher_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}