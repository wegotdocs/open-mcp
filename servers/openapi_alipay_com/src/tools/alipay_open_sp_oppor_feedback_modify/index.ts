export { inputParams } from "./schema/root.js"

export const toolName = `alipay_open_sp_oppor_feedback_modify`
export const toolDescription = `商机拓展完成`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/open/sp/oppor/feedback/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "expand_result",
    "isv_pid",
    "leads_id",
    "merchant_pid",
    "oppor_id",
    "sn"
  ]
}
export const flatMap = {}