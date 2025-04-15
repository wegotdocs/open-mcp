export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_operation_openbizmock_put_query`
export const toolDescription = `测试put类型接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/operation/openbizmock/put/query`
export const method = `put`
export const security = []
export const keys = {
  "query": [
    "b_query"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "c_body"
  ]
}
export const flatMap = {}