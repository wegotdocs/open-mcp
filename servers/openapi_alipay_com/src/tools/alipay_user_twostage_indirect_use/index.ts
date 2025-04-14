export { inputParams } from "./schema/root.js"

export const toolName = `alipay_user_twostage_indirect_use`
export const toolDescription = `双联二阶段`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/user/twostage/indirect/use`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "dynamic_id",
    "org_pid",
    "pay_smid",
    "sence_no",
    "source_pid"
  ]
}
export const flatMap = {}