export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_agent_get`
export const toolDescription = `查询客服详情`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/agent/get`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "id",
    "job_number",
    "user_channel",
    "external_user_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}