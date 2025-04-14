export { inputParams } from "./schema/root.js"

export const toolName = `alipay_merchant_tradecomplain_batchquery`
export const toolDescription = `查询交易投诉列表`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/merchant/tradecomplain/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "begin_time",
    "end_time",
    "page_num",
    "page_size",
    "status",
    "target_infos"
  ]
}
export const flatMap = {}