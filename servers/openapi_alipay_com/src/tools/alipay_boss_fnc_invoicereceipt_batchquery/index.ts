export { inputParams } from "./schema/root.js"

export const toolName = `alipay_boss_fnc_invoicereceipt_batchquery`
export const toolDescription = `根据月账单号集合和来源查询开票单据及金额汇总`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/boss/fnc/invoicereceipt/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "bill_nos",
    "out_biz_type"
  ]
}
export const flatMap = {}