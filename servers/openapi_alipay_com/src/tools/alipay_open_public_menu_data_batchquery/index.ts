export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_public_menu_data_batchquery`
export const toolDescription = `菜单分析数据查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/public/menu/data/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "begin_date",
    "end_date"
  ]
}
export const flatMap = {}