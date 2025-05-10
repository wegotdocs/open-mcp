export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_sw_knowledge_modify`
export const toolDescription = `知识库问答管理`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/sw/knowledge/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "category_id",
    "category_name",
    "content",
    "ext_id",
    "extend_titles",
    "icon",
    "id",
    "is_delete",
    "is_searchable",
    "library_id",
    "library_name",
    "spu",
    "tags",
    "title"
  ]
}
export const flatMap = {}