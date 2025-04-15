export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_agent_delete`
export const toolDescription = `删除客服接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/agent/delete`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}