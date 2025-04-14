export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_operation_openbizmock_test_query`
export const toolDescription = `测试openpai的openid自动补偿哈哈`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/operation/openbizmock/test/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "fuza",
    "out_open_id",
    "u_test"
  ]
}
export const flatMap = {}