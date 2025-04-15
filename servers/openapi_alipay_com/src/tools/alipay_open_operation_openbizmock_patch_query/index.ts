export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_operation_openbizmock_patch_query`
export const toolDescription = `patch类型接口测试`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/operation/openbizmock/patch/query`
export const method = `patch`
export const security = []
export const keys = {
  "query": [
    "b_query"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "c_body",
    "complex_a",
    "complex_b",
    "complex_c",
    "complex_d",
    "id_type_modify_open_id",
    "id_typea",
    "price",
    "uida"
  ]
}
export const flatMap = {}