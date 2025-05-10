export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_oppor_detail_query`
export const toolDescription = `商机作业详情查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/oppor/detail/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "isv_pid",
    "oppor_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}