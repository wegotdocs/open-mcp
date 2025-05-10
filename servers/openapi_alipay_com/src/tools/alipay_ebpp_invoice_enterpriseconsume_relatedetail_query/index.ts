export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_enterpriseconsume_relatedetail_query`
export const toolDescription = `合花账单关联详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/enterpriseconsume/relatedetail/query`
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