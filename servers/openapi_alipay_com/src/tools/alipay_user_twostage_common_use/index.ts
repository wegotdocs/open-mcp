export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_twostage_common_use`
export const toolDescription = `通用当面付二阶段接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/twostage/common/use`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "dynamic_id",
    "pay_check_strategy",
    "pay_pid",
    "sence_no"
  ]
}
export const flatMap = {}