export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_instance_create`
export const toolDescription = `创建租户实例`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/instance/create`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "creator_id",
    "description",
    "external_id",
    "name"
  ]
}
export const flatMap = {}