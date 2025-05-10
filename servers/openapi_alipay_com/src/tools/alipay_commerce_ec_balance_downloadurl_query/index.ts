export { inputParams } from "./schema/root.js"

export const toolName = `alipay_commerce_ec_balance_downloadurl_query`
export const toolDescription = `对账单文件下载接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/commerce/ec/balance/downloadurl/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "enterprise_id",
    "account_id",
    "agreement_no",
    "bill_type",
    "bill_date"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}