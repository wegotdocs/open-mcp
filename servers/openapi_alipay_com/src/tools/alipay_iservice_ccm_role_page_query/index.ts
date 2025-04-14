export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_role_page_query`
export const toolDescription = `分页查询角色`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/role/page/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "name",
    "page_num",
    "page_size",
    "ccs_instance_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}