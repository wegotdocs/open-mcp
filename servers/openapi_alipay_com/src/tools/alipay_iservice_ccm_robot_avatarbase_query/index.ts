export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_robot_avatarbase_query`
export const toolDescription = `虚拟数字人开放接口调用`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/robot/avatarbase/query`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "commodity_code",
    "method_params",
    "target_method",
    "tenant_code"
  ]
}
export const flatMap = {}