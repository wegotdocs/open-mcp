export { inputParams } from "./schema/root.js"

export const toolName = `alipay_boss_fnc_invoice_query`
export const toolDescription = `根据发票ID查询发票信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/boss/fnc/invoice/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "invoice_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}