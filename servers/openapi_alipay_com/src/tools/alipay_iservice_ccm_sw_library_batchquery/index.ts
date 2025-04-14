export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_sw_library_batchquery`
export const toolDescription = `知识库-库-批量查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/sw/library/batchquery`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "ccs_instance_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}