export { inputParams } from "./schema/root.js"

export const toolName = `alipay_boss_fnc_invoicereceipt_create`
export const toolDescription = `账单变更同步接口月帐单创建消息同步`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/boss/fnc/invoicereceipt/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "event_code",
    "event_type",
    "monthly_bill",
    "msg_id",
    "out_biz_type"
  ]
}
export const flatMap = {}