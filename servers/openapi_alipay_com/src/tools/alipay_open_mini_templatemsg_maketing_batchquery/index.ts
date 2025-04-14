export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_templatemsg_maketing_batchquery`
export const toolDescription = `小程序模板消息营销投放详情分页批量查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/templatemsg/maketing/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "page_num",
    "page_size"
  ]
}
export const flatMap = {}