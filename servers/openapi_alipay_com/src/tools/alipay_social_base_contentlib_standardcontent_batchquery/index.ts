export { inputParams } from "./schema/root.js"

export const toolName = `alipay_social_base_contentlib_standardcontent_batchquery`
export const toolDescription = `内容批量查询接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/social/base/contentlib/standardcontent/batchquery`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "need_detail",
    "page_num",
    "page_size",
    "public_id",
    "status"
  ]
}
export const flatMap = {}