export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_agent_modify`
export const toolDescription = `更新客服接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/agent/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "answering_mode",
    "ccs_instance_ids",
    "chat_configs",
    "email",
    "hotline_configs",
    "id",
    "mobile",
    "nick_name",
    "real_name",
    "role_ids",
    "updater_id"
  ]
}
export const flatMap = {}