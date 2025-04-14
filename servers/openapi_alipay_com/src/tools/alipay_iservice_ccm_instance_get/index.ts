export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_instance_get`
export const toolDescription = `查询单个租户实例（数据权限）`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/instance/get`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "id",
    "external_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}