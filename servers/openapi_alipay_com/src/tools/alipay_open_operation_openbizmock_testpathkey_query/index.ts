export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_operation_openbizmock_testpathkey_query`
export const toolDescription = `测试网关协议3.0key和path`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/operation/openbizmock/testpathkey/query/{keykey}/{a}`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "b",
    "c"
  ],
  "header": [],
  "path": [
    "keykey",
    "a"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}