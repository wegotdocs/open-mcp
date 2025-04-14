export { inputParams } from "./schema/root.js"

export const toolName = `alipay_iservice_ccm_agent_create`
export const toolDescription = `新增客服接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/iservice/ccm/agent/create`
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
    "creator_id",
    "email",
    "external_user_id",
    "hotline_configs",
    "job_number",
    "mobile",
    "nick_name",
    "real_name",
    "role_ids",
    "user_channel"
  ]
}
export const flatMap = {}