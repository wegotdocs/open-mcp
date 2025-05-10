export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_sw_library_modify`
export const toolDescription = `知识库-库-修改`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/sw/library/modify`
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