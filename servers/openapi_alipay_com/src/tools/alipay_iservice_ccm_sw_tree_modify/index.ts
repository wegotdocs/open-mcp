export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_sw_tree_modify`
export const toolDescription = `知识库-类目-修改`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/sw/tree/modify`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "ccs_instance_id",
    "id",
    "name"
  ]
}
export const flatMap = {}