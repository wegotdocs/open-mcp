export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_oppor_page_query`
export const toolDescription = `商机作业列表查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/oppor/page/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "isv_pid",
    "status_list",
    "page_size",
    "page_num"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}