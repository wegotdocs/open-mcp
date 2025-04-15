export { inputParams } from "./schema/root.js"

export const toolName = `alipay_data_dataservice_bill_downloadurl_query`
export const toolDescription = `查询对账单下载地址`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/data/dataservice/bill/downloadurl/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "bill_type",
    "bill_date",
    "smid"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}