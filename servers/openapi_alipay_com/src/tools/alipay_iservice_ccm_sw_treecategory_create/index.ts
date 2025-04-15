export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_sw_treecategory_create`
export const toolDescription = `知识库-节点-创建`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/sw/treecategory/create`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "ccs_instance_id",
    "description",
    "father_id",
    "name",
    "tags"
  ]
}
export const flatMap = {}