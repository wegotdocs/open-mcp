export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_mini_appdeploy_bydeployversion_query`
export const toolDescription = `根据发布版本查询小程序发布信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/mini/appdeploy/bydeployversion/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "bundle_id",
    "mini_app_id",
    "inst_code",
    "deploy_version"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}