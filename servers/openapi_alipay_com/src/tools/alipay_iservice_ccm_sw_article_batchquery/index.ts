export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_sw_article_batchquery`
export const toolDescription = `知识库-问答-批量查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/sw/article/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "category_id",
    "ccs_instance_id",
    "end_time",
    "ids",
    "keyword",
    "keywords",
    "library_id",
    "page_num",
    "page_size",
    "search_all_category",
    "search_category_type",
    "start_time",
    "status"
  ]
}
export const flatMap = {}