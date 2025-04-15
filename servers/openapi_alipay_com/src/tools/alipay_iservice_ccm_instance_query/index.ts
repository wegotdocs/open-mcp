export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_instance_query`
export const toolDescription = `列出所有的租户实例（数据权限）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/instance/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "page_num",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}