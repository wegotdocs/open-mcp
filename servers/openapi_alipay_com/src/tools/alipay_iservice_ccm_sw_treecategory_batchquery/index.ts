export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_sw_treecategory_batchquery`
export const toolDescription = `知识库-节点-批量查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/sw/treecategory/batchquery`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "ccs_instance_id",
    "library_id",
    "name",
    "page_num",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}