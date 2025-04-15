export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_sw_article_create`
export const toolDescription = `知识库-问答-创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/sw/article/create`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "attachments",
    "category_id",
    "ccs_instance_id",
    "content",
    "extend_titles",
    "keywords",
    "library_id",
    "publish_end",
    "publish_start",
    "related_articles",
    "scene_codes",
    "title"
  ]
}
export const flatMap = {}